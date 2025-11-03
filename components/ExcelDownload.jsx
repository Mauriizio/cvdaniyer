"use client"
import { useEffect, useState } from "react"

export default function ExcelDownload() {
  const [downloads, setDownloads] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isLoadingCount, setIsLoadingCount] = useState(true)
  const [countError, setCountError] = useState(false)

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await fetch("/api/downloads")
        if (!response.ok) {
          throw new Error("Failed to fetch downloads count")
        }
        const data = await response.json()
        setDownloads(typeof data.count === "number" ? data.count : 0)
        setCountError(false)
      } catch (error) {
        console.error("Error loading downloads count", error)
        setCountError(true)
      } finally {
        setIsLoadingCount(false)
      }
    }

    fetchDownloads()
  }, [])

  const triggerFileDownload = () => {
    const link = document.createElement("a")
    link.href = "/documents/control-finanzas.xlsx"
    link.download = "Control-Finanzas-Daniyer-Mendoca.xlsx"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      const response = await fetch("/api/downloads", { method: "POST" })
      if (!response.ok) {
        throw new Error("Failed to update downloads count")
      }
      const data = await response.json()
      setDownloads((current) => (typeof data.count === "number" ? data.count : current + 1))
      setCountError(false)
    } catch (error) {
      console.error("Error updating downloads count", error)
      setCountError(true)
    } finally {
      triggerFileDownload()
      setTimeout(() => {
        setIsDownloading(false)
      }, 1000)
    }
  }

  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-600 pb-2">Recurso Gratuito</h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-gray-200">
            <img src="/images/excel.png" alt="Plantilla Excel Control de Gastos" className="w-full h-auto rounded" />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Plantilla Excel: Control de Gastos Personales</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Herramienta profesional para el control y seguimiento de gastos personales. Incluye categorización
            automática, gráficos dinámicos y análisis mensual de tus finanzas.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              {isDownloading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Descargando...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Descargar Gratis
                </>
              )}
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
              <span>
                {isLoadingCount
                  ? "Cargando..."
                  : countError
                  ? "Conteo no disponible"
                  : `${downloads} descargas`}
              </span>
            </div>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            Formato: .xlsx | Tamaño: ~2MB | Compatible con Excel 2016+ | Creado por Daniyer Mendoca
          </div>
        </div>
      </div>
    </section>
  )
}
