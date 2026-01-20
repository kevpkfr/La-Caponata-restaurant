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
              Satisfacer el gusto y preferencia de nuestros clientes, ofreciendo
              alimentos italianos, nutritivos de buena calidad, variedad, a
              través de un excelente y ágil servicio.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden text-center">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/68/15/b9/la-caponata.jpg?w=1000&h=-1&s=1"
            alt="Restaurante italiano"
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <HiOutlineEye className="text-red-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Visión</h3>
            <p className="text-gray-600">
              Ser el mejor restaurante de comida italiana de la zona y
              posicionarnos en el mercado, con comida de alta excelencia,
              aumentando con ello la preferencia de nuestros clientes para
              alcanzar una mayor ventaja competitiva.
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
              Respeto, cortesía, honestidad y servicio.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
