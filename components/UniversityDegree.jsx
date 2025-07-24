"use client"
import { useState } from "react"
import ImageModal from "./ImageModal"

export default function UniversityDegree() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Título Universitario</h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Imagen del título - Lado izquierdo */}
          <div className="w-full md:w-1/3">
            <div
              className="bg-white p-3 rounded-lg shadow-sm border-2 border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src="/images/certificado (1).png"
                alt="Título de Licenciado en Ciencias y Artes Militares"
                className="w-full h-auto rounded"
              />
              <div className="text-center mt-2">
                <span className="text-xs text-gray-500 flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  Click para ampliar
                </span>
              </div>
            </div>
          </div>

          {/* Descripción - Lado derecho */}
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Licenciado en Ciencias y Artes Militares</h3>
            <div className="space-y-2 mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Mención:</span> Administración Pública
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Institución:</span> Academia Militar de la Guardia Nacional Bolivariana
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Fecha:</span> Julio 2017
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Nivel:</span> Nivel 6 EQF-MEC
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">País:</span> Venezuela
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Formación integral en liderazgo militar, gestión administrativa, planificación estratégica y desarrollo de
              competencias para la administración pública y privada. Base sólida para el desarrollo profesional en áreas
              de seguridad y administración.
            </p>
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/images/certificado (1).png"
        imageAlt="Título de Licenciado en Ciencias y Artes Militares"
        title="Licenciado en Ciencias y Artes Militares - Mención Administración Pública"
      />
    </>
  )
}
