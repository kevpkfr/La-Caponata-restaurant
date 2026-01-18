import {
  HiOutlineOfficeBuilding,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi";

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Título */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Sobre Nosotros
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          La Caponata es un restaurante de cocina siciliana ubicado en el Centro
          Histórico de Quito, que rinde homenaje a la tradición y cultura
          gastronómica del Mediterráneo.
        </p>
      </header>

      {/* Contenido */}
      <section className="grid gap-8 md:grid-cols-3">
        
        {/* Misión */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden text-center">
          <img
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba"
            alt="Cocina italiana tradicional"
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <HiOutlineHeart className="text-red-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Misión</h3>
            <p className="text-gray-600">
              Ofrecer una experiencia gastronómica auténtica mediante platos
              sicilianos elaborados con ingredientes de calidad y respeto por la
              tradición culinaria.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden text-center">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyubEbLKE9lan3hYC2ejyRBnr3-IXwiRe5ahtGOIc4ftLHH-Vu4T_PKxUylOMVq5sXxbRJ-kUiGTdAEP54gDymsBDqkfvSOgUYAiInTOxbCR_mn4fXz-b6FFx2WeKNmcAVGh5b1=s680-w680-h510-rw"
            alt="Restaurante italiano"
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <HiOutlineEye className="text-red-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Visión</h3>
            <p className="text-gray-600">
              Ser un referente de la cocina italiana en Quito, reconocido por
              su identidad cultural, calidad culinaria y excelente servicio.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden text-center">
          <img
            src="https://images.unsplash.com/photo-1543353071-087092ec393a"
            alt="Ingredientes italianos"
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <HiOutlineOfficeBuilding className="text-red-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Valores</h3>
            <p className="text-gray-600">
              Tradición, calidad, honestidad, respeto cultural y pasión por la
              gastronomía italiana y el entorno histórico que nos rodea.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
