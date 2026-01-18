import {
  FaCheckCircle,
  FaHome,
  FaWhatsapp,
  FaClock,
  FaMotorcycle,
  FaReceipt,
} from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;
  const estimatedTime = "30-45 minutos";
  const deliveryAddress = "Av. Amazonas N34-123 y Av. Patria";
  const contactNumber = "+593 99 123 4567";

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/30 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            {/* Animated Circles */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl">
              <FaCheckCircle className="text-white text-6xl animate-scaleIn" />
            </div>
            <div className="absolute -top-2 -right-2">
              <GiPartyPopper className="text-amber-500 text-4xl animate-bounce" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ¡Pedido <span className="text-green-600">Confirmado</span>!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gracias por elegir La Caponata. Tu pedido está siendo preparado con
            amor y tradición siciliana.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Detalles del Pedido
                </h2>
                <p className="text-green-100">
                  Guarda esta información para seguimiento
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <div className="text-green-100 text-sm">Número de Pedido</div>
                <div className="text-white text-2xl font-bold tracking-wider">
                  {orderNumber}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Estimated Delivery */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                    <FaClock className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Tiempo Estimado
                    </h3>
                    <p className="text-2xl font-bold text-green-700">
                      {estimatedTime}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Nuestro equipo está preparando tu pedido con ingredientes
                  frescos
                </p>
              </div>

              {/* Delivery Info */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                    <FaMotorcycle className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Dirección de Entrega
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 truncate">
                      {deliveryAddress}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Nuestro repartidor te llamará antes de llegar
                </p>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaReceipt className="text-green-600" />
                Progreso de tu Pedido
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-emerald-600 md:transform md:-translate-x-1/2"></div>

                {/* Timeline Steps */}
                <div className="relative space-y-12">
                  {/* Step 1 - Confirmed */}
                  <div className="flex items-center gap-6">
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 flex items-center justify-center shadow-lg">
                        <div className="w-5 h-5 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">
                          Pedido Confirmado
                        </h4>
                        <span className="text-sm text-green-600 font-semibold">
                          AHORA
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Hemos recibido tu pedido correctamente
                      </p>
                    </div>
                  </div>

                  {/* Step 2 - Preparation */}
                  <div className="flex items-center gap-6">
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                        <div className="w-5 h-5 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-amber-50 border border-amber-100 rounded-2xl p-5 opacity-70">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">
                          En Preparación
                        </h4>
                        <span className="text-sm text-amber-600 font-semibold">
                          PRÓXIMO
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Nuestros chefs están cocinando tu pedido
                      </p>
                    </div>
                  </div>

                  {/* Step 3 - Delivery */}
                  <div className="flex items-center gap-6">
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <div className="w-5 h-5 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-blue-50 border border-blue-100 rounded-2xl p-5 opacity-50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">En Camino</h4>
                        <span className="text-sm text-blue-600 font-semibold">
                          PRÓXIMO
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Tu pedido será entregado en {estimatedTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    ¿Preguntas sobre tu pedido?
                  </h4>
                  <p className="text-gray-300">Estamos aquí para ayudarte</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-green-300">{contactNumber}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <FaHome className="text-xl" />
            <span>Volver al Inicio</span>
          </Link>

          <Link
            to="/"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-green-600 text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Ver Más Platos</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">
            Te hemos enviado un correo electrónico con todos los detalles de tu
            pedido.
          </p>

          {/* Next Order Promotion */}
          <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-6 max-w-md">
            <h4 className="font-bold text-gray-900 mb-2">
              ¡Tu próxima orden con descuento!
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              Usa el código{" "}
              <span className="font-bold text-amber-600">CAPONATA10</span> para
              obtener un 10% de descuento en tu próximo pedido.
            </p>
            <div className="text-xs text-gray-500">Válido por 30 días</div>
          </div>
        </div>
      </div>

      {/* Confetti Effect Placeholder */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `fall ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}
