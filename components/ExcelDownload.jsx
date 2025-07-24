"use client"
import { useState } from "react"

export default function ExcelDownload() {
  const [downloads, setDownloads] = useState(127) // Contador inicial

  const handleDownload = () => {
    // Simular descarga
    setDownloads((prev) => prev + 1)
    // Aquí iría la lógica real de descarga
    console.log("Descargando archivo Excel...")
  }

  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-600 pb-2">Recurso Gratuito</h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-gray-200">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Plantilla Excel Control de Gastos"
              className="w-full h-auto rounded"
            />
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
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descargar Gratis
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
              <span>{downloads} descargas</span>
            </div>
          </div>

          <div className="mt-3 text-xs text-gray-500">Formato: .xlsx | Tamaño: ~2MB | Compatible con Excel 2016+</div>
        </div>
      </div>
    </section>
  )
}
