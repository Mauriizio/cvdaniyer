export default function SkillsCompetencies() {
  const technicalSkills = [
    "Herramientas de Google (Gmail, Drive, Google Forms, etc.)",
    "Microsoft Office (Word, Excel, PowerPoint)",
    "Sistemas de seguridad y vigilancia",
    "Control de accesos y rondas de verificación",
  ]

  const personalSkills = [
    "Organización y puntualidad",
    "Comunicación efectiva",
    "Resolución de problemas",
    "Sociable y empático",
    "Liderazgo y disciplina militar",
    "Trabajo bajo presión",
    "Toma de decisiones en situaciones críticas",
  ]

  const languages = [{ language: "Español", level: "Lengua materna", flag: "🇪🇸" }]

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
        Competencias y Habilidades
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">💻</span>
            Competencias Técnicas
          </h3>
          <ul className="space-y-2">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700 text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">🎯</span>
            Habilidades Personales
          </h3>
          <ul className="space-y-2">
            {personalSkills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700 text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <span className="mr-2">🌍</span>
          Competencias de Idiomas
        </h3>
        <div className="space-y-2">
          {languages.map((lang, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700 font-medium flex items-center">
                <span className="mr-2">{lang.flag}</span>
                {lang.language}
              </span>
              <span className="text-blue-600 text-sm font-medium">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
