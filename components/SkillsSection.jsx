export default function SkillsSection() {
  const characteristics = [
    "Enfocado en resultados con mentalidad analítica",
    "Excelente comunicador y empático",
    "Resiliente y proactivo bajo presión",
    "Colaborador y creador de relaciones de valor",
    "Aprendiz constante comprometido con la mejora",
  ]

  const skills = [
    "Manejo de objeciones y ventas de intangibles",
    "Creación de contenido digital (Reels, podcast, ebooks)",
    "Excel, Canva, WordPress, Notion, Trello, Google Workspace",
    "Gestión del tiempo y planificación mensual",
    "Oratoria, liderazgo y formación de equipos",
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">Perfil Profesional</h2>

      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          Soy un profesional multidisciplinario con experiencia en seguridad. Me caracterizo por mi enfoque humano, mi
          capacidad de adaptación y mi compromiso con el crecimiento personal y profesional.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Características Personales</h3>
          <ul className="space-y-2">
            {characteristics.map((char, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700 text-sm">{char}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Habilidades Técnicas</h3>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700 text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Filosofía de Trabajo</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Creo en el poder de la educación como herramienta de transformación personal. Trabajo desde la ética, la
          confianza y el compromiso, buscando siempre generar un impacto positivo en las personas y aportar soluciones
          reales. Mi propósito es contribuir a una sociedad más segura, protegiendo al más necesitado.
        </p>
      </div>
    </section>
  )
}
