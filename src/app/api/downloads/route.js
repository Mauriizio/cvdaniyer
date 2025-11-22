import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

import seed from "../../../../data/downloads.json"

const filePath = path.join(process.cwd(), "data", "downloads.json")
const READ_ONLY_ERROR_CODES = new Set(["EROFS", "EACCES", "EBADF", "ENOSPC"])

const seedCount = typeof seed?.count === "number" ? seed.count : 0

async function readCount() {
  try {
    const fileContents = await fs.readFile(filePath, "utf-8")
    const parsed = JSON.parse(fileContents)
    return { count: typeof parsed.count === "number" ? parsed.count : seedCount, synced: true }
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.mkdir(path.dirname(filePath), { recursive: true })
        await fs.writeFile(filePath, JSON.stringify({ count: seedCount }, null, 2), "utf-8")
        return { count: seedCount, synced: true }
      } catch (writeError) {
        if (READ_ONLY_ERROR_CODES.has(writeError.code)) {
          return { count: seedCount, synced: false }
        }
        console.error("Error bootstrapping downloads count:", writeError)
        throw writeError
      }
    }
    if (READ_ONLY_ERROR_CODES.has(error.code)) {
      return { count: seedCount, synced: false }
    }
    console.error("Error reading downloads count:", error)
    throw error
  }
}

async function writeCount(count) {
  await fs.writeFile(filePath, JSON.stringify({ count }, null, 2), "utf-8")
}

export async function GET() {
  try {
    const { count, synced } = await readCount()
    return NextResponse.json({ count, synced })
  } catch (error) {
    return NextResponse.json({ error: "Unable to read downloads." }, { status: 500 })
  }
}

export async function POST() {
  let currentCount = 0

  try {
    const readResult = await readCount()
    currentCount = readResult.count
    const updatedCount = currentCount + 1
    if (readResult.synced === false) {
      return NextResponse.json({ count: updatedCount, synced: false })
    }
    await writeCount(updatedCount)
    return NextResponse.json({ count: updatedCount, synced: true })
  } catch (error) {
    console.error("Error updating downloads count:", error)

    if (READ_ONLY_ERROR_CODES.has(error.code)) {
      return NextResponse.json({ count: currentCount, synced: false })
    }

    return NextResponse.json({ error: "Unable to update downloads." }, { status: 500 })
  }
}
