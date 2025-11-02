import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "downloads.json")

async function readCount() {
  try {
    const fileContents = await fs.readFile(filePath, "utf-8")
    const parsed = JSON.parse(fileContents)
    return typeof parsed.count === "number" ? parsed.count : 0
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(path.dirname(filePath), { recursive: true })
      await fs.writeFile(filePath, JSON.stringify({ count: 0 }, null, 2), "utf-8")
      return 0
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
    const count = await readCount()
    return NextResponse.json({ count })
  } catch (error) {
    return NextResponse.json({ error: "Unable to read downloads." }, { status: 500 })
  }
}

export async function POST() {
  try {
    const currentCount = await readCount()
    const updatedCount = currentCount + 1
    await writeCount(updatedCount)
    return NextResponse.json({ count: updatedCount })
  } catch (error) {
    return NextResponse.json({ error: "Unable to update downloads." }, { status: 500 })
  }
}
