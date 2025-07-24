export default function AboutSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Sobre Mí</h2>
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Actualmente busco oportunidad laboral donde pueda demostrar mis habilidades, mi productividad, compromiso y
          rápida capacidad de aprendizaje. Cuento con{" "}
          <span className="font-semibold">10 años de experiencia militar</span>, habiéndome retirado en el año 2023 con
          el grado de <span className="font-semibold">Teniente</span> en la República Bolivariana de Venezuela.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Durante mi carrera desarrollé competencias clave como{" "}
          <span className="font-semibold">
            liderazgo, disciplina, trabajo bajo presión y toma de decisiones en situaciones críticas
          </span>
          .
        </p>
        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-gray-700 leading-relaxed italic">
            "A continuación, mi experiencia laboral en este noble y gran país que hoy me acoge, España."
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Nota:</span> Actualmente me encuentro trabajando, por lo que mi
            incorporación estaría sujeta a un preaviso. Me encuentro abierto a valorar una posible transición
            beneficiosa a ambas partes.
          </p>
        </div>
      </div>
    </section>
  )
}
