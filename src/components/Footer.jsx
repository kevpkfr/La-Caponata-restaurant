import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-extrabold text-white mb-3">
            🍝 La Caponata
          </h3>
          <p className="text-sm leading-relaxed">
            Restaurante de auténtica cocina siciliana ubicado en el Centro
            Histórico de Quito. Una experiencia gastronómica inspirada en la
            tradición, historia y sabores del Mediterráneo.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contáctanos
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              García Moreno y Manabí – Centro Histórico de Quito
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              098 014 8251
            </li>
            <li className="text-sm text-gray-400 pl-7">
              Abiertos de lunes a domingo de 12h00 a 22h00
            </li>
            <li className="pl-7">
              <a
                href="https://maps.app.goo.gl/PKo1ejSVAJPa1Vkw8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline text-sm"
              >
                Ver ubicación en Google Maps
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Síguenos
          </h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/lacaponatauio/?locale=es_LA"
              className="bg-gray-800 hover:bg-red-600 transition p-3 rounded-full"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/lacaponataquito/?hl=es"
              className="bg-gray-800 hover:bg-red-600 transition p-3 rounded-full"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/593980148251"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-green-600 transition p-3 rounded-full"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © 2026 La Caponata · Proyecto académico de marketing digital
      </div>
    </footer>
  );
}
