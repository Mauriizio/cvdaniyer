export default function PersonalInfo() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Información Personal</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Nombre:</span> Daniyer Mendoca
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Fecha de Nacimiento:</span> 17 de Agosto, 1994 (31 años)
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Nacionalidad:</span> Portuguesa
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Dirección:</span> Av. Albufera 430, 28031, Madrid, España
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span>
            <a href="mailto:daniyersmu@gmail.com" className="text-blue-600 hover:underline ml-1">
              daniyersmu@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Teléfono:</span>
            <a href="tel:+34635371323" className="text-blue-600 hover:underline ml-1">
              (+34) 635 371 323
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Permisos de Conducción:</span> A2, B, BE
          </p>
        </div>
      </div>
    </section>
  )
}
