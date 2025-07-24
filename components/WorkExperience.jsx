export default function WorkExperience() {
  const experiences = [
    {
      company: "TRABLISA",
      position: "Vigilante de Seguridad",
      period: "Diciembre 2024 - Actual",
      location: "Madrid, España",
      description:
        "He desempeñado funciones de control de accesos, tareas de disuasión, rondas periódicas de verificación de instalaciones y correcto funcionamiento de sistemas de seguridad, actuando con total eficiencia ante cualquier incidencia.",
      current: true,
    },
    {
      company: "VISABREM - TRABLISA",
      position: "Auxiliar de Servicios",
      period: "Octubre 2023 - Septiembre 2024",
      location: "Madrid, España",
      description:
        "Contribuí al desarrollo y buen funcionamiento de las actividades diarias de los servicios asignados.",
      current: false,
    },
    {
      company: "Academia Militar de la Guardia Nacional Bolivariana",
      position: "Oficial Militar - Teniente",
      period: "2013 - 2023 (10 años)",
      location: "Venezuela",
      description:
        "Carrera militar con desarrollo de competencias en liderazgo, disciplina, trabajo bajo presión y toma de decisiones en situaciones críticas. Retirado con grado de Teniente.",
      current: false,
    },
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">Experiencia Laboral</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200 last:border-l-0">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
            {exp.current && (
              <span className="absolute -left-8 top-6 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Actual
              </span>
            )}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
              </div>
              <p className="text-blue-700 font-medium mb-1">{exp.company}</p>
              <p className="text-gray-600 text-sm mb-3">{exp.location}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
