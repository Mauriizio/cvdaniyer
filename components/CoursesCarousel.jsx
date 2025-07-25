"use client"
import { useState } from "react"
import ImageModal from "./ImageModal"

export default function CoursesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [modalImage, setModalImage] = useState(null)

  const courses = [
    {
      title: "Certificiación de Profesionalidad en Vigilancia, Seguridad Privada y Protección de Personas.",
      institution: "FORMAEMPLEAN",
      year: "Agt. 2024",
      location: "Madrid, España",
      description:
        "Certificación oficial para trabajar como vigilante de seguridad privada y proteccion de personal en España.",
      type: "Certificación",
      level: "Nivel de Cualificacion 2",
      image: "/images/certificado.png",
      imageAlt: "Certificado de Vigilante de Seguridad Privada",
    },

    {
      title: "Acreditacion como Administrador de Parques de Armas. ",
      institution: "Direccion General de Armas y Explosivos.",
      year: "Sept. 2021",
      location: "San Felipe, Venezuela",
      description:
        "Certificado como Administrador de Parques de Armas, con conocimientos en la elaboración de polígonos y uso de sistemas de armas portátiles asignados a la funcion de seguridad y defensa.",
        type: "Certificación",
      level: "Nivel Avanzado",
      image: "/images/certificado (13).png",
      imageAlt: "Certificado Administrador de Parques de Armas.",
    },

    {
      title: "Curso de Guerra Irregular «LINCE».",
      institution: "Grupo de Acciones de Comando de la Guardia Nacional Bolivariana",
      year: "Jul. 2015",
      location: "Macarao, Venezuela",
      description:
        "Curso de Guerra Irregular para operaciones especiales y tácticas avanzadas.",
      type: "Adiestramiento",
      level: "Nivel Avanzado",
      image: "/images/certificado (5).png",
      imageAlt: "Certificado GAC GNB",
    },

    {
      title: "Curso de Helitactica.",
      institution: "Grupo de Acciones de Comando de la Guardia Nacional Bolivariana",
      year: "Oct. 2015",
      location: "Macarao, Venezuela",
      description:
        "Curso de Helitáctica para operaciones aéreas y tácticas con helicópteros.",
      type: "Adiestramiento",
      level: "Nivel Avanzado",
      image: "/images/certificado (10).png",
      imageAlt: "Certificado GAC GNB",
    },

     {
      title: "Curso de Investigacion Penal",
      institution: "Servicio de Policia de Investigacion Penal de Delitos Financieros",
      year: "May. 2017",
      location: "Caracas, Venezuela",
      description:
        "Certificacion en investigacion penal de delitos financieros, enfocado en la seguridad y vigilancia.",
      type: "Adiestramiento",
      level: "Nivel Avanzado",
      image: "/images/certificado (11).png",
      imageAlt: "Certificado Policia de Investicacion Penal",
    },


    {
      title: "Adiestramiento de perfilamiento y revision de vehiculos.",
      institution: "Direccion de Apresto Operacional y Comando Nacional Antidrogas GNB",
      year: "Abr. 2021",
      location: "Caracas, Venezuela",
      description:
        "Certificación oficial en técnicas de perfilamiento y revisión de vehículos en materia de combate contra el trafico ilicito de drogas.",
      type: "Adiestramiento",
      level: "Nivel Avanzado",
      image: "/images/certificado (1).png",
      imageAlt: "Certificado GNB",
    },


{
      title: "Taller de Manejo Defensivo.",
      institution: "Cuerpo de Policia Nacional Bolivariana",
      year: "May. 2017",
      location: "Caracas, Venezuela",
      description:
        "Curso de Manejo Defensivo para la prevención de accidentes y mejora de la seguridad vial.",
      type: "Adiestramiento",
      level: "Nivel Profesional",
      image: "/images/certificado (2).png",
      imageAlt: "Certificado PNB",
    },

    {
      title: "Curso de Rapel y Montañismo.",
      institution: "Grupo de Acciones de Comando de la Guardia Nacional Bolivariana",
      year: "Oct. 2015",
      location: "Macarao, Venezuela",
      description:
        "Curso de Rapel y Montañismo para operaciones de rescate y seguridad en terrenos difíciles.",
      type: "Adiestramiento",
      level: "Nivel Avanzado",
      image: "/images/certificado (3).png",
      imageAlt: "Certificado GAC GNB",
    },

    
    {
      title: "Servicio Comunitario de Educacion Superior",
      institution: "Academia Militar de la Guardia Nacional Bolivariana",
      year: "May. 2017",
      location: "Caracas, Venezuela",
      description:
        "Certificado de Participacion en Jornada de Servicio Comunitario para la formación de líderes y promotores sociales.",
      type: "Servicio",
      level: "Nivel Servicio Social",
      image: "/images/certificado (9).png",
      imageAlt: "Servicio Comunitario Militar",
    },
    

    
    
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length)
  }

  const openModal = (course) => {
    setModalImage(course)
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <>
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
          Formación y Certificaciones
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {courses.map((course, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Imagen del curso - Lado izquierdo */}
                      <div className="w-full md:w-1/3">
                        <div
                          className="bg-white p-3 rounded-lg shadow-sm border-2 border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => openModal(course)}
                        >
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.imageAlt}
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

                      {/* Información del curso - Lado derecho */}
                      <div className="w-full md:w-2/3">
                        <div className="flex justify-between items-start mb-3">
                          <span className="bg-blue-600 text-white px-2 py-1 text-center rounded-full text-xs font-medium">
                            {course.type}
                          </span>

                          <span className="text-blue-600 font-semibold">{course.year}</span>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                        <p className="text-blue-600 font-medium mb-1">{course.institution}</p>
                        <p className="text-gray-600 text-sm mb-2">{course.location}</p>
                        <p className="text-gray-600 text-sm mb-2 font-medium">{course.level}</p>
                        <p className="text-gray-700 text-sm leading-relaxed">{course.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles del carrusel */}
          {courses.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicadores */}
              <div className="flex justify-center mt-4 space-x-2">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Modal para mostrar imagen ampliada */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={closeModal}
          imageSrc={modalImage.image.replace("height=200&width=300", "height=600&width=800")}
          imageAlt={modalImage.imageAlt}
          title={modalImage.title}
        />
      )}
    </>
  )
}
