import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaCheckCircle, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";

export default function Cart() {
  const { cart, removeFromCart, total, updateQuantity } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-md opacity-70"></div>
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 flex items-center justify-center shadow-xl">
                <FaShoppingCart className="text-white text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Tu Carrito</h1>
              <p className="text-gray-600">Revisa y modifica tus pedidos</p>
            </div>
          </div>

          {/* Cart Stats */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-green-700">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>{cart.length} {cart.length === 1 ? 'producto' : 'productos'}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <span>Total estimado:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <GiEmptyMetalBucketHandle className="text-gray-400 text-6xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Tu carrito está vacío</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Añade algunos de nuestros deliciosos platos sicilianos para comenzar tu pedido
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FaShoppingCart />
              <span>Explorar Menú</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                      {/* Product Image */}
                      <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 overflow-hidden">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        {item.promo && (
                          <div className="absolute -top-2 -left-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            OFERTA
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">{item.name}</h3>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {item.tags?.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-2xl font-bold text-green-700 mb-2">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                              ${item.price.toFixed(2)} c/u
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls & Actions */}
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                aria-label="Reducir cantidad"
                              >
                                <FaMinus className="text-gray-600" />
                              </button>
                              <span className="font-bold text-gray-900 min-w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                aria-label="Aumentar cantidad"
                              >
                                <FaPlus className="text-gray-600" />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                <FaTrash className="text-red-500" />
                              </div>
                              <span>Eliminar</span>
                            </button>
                          </div>

                          <div className="text-right hidden sm:block">
                            <p className="text-sm text-gray-500 mb-1">Subtotal</p>
                            <p className="text-xl font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    Resumen del Pedido
                  </h3>

                  {/* Order Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Envío</span>
                      <span className="font-semibold text-green-600">Gratis</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Impuestos</span>
                      <span className="font-semibold text-gray-900">${(total * 0.12).toFixed(2)}</span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-green-700">
                            ${(total * 1.12).toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-500">IVA incluido</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Tienes un código promocional?
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Escribe tu código"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      <button className="px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                        Aplicar
                      </button>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link
                    to="/checkout"
                    className="group block w-full text-center"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 group-hover:from-green-700 group-hover:to-emerald-800 transition-all duration-300"></div>
                      <div className="relative px-8 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <FaCheckCircle className="text-white text-xl" />
                          <span className="text-white font-bold text-lg">Finalizar Pedido</span>
                        </div>
                        <div className="text-white/90 text-sm mt-2">
                          {cart.length} {cart.length === 1 ? 'producto' : 'productos'} • ${(total * 1.12).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Additional Info */}
                  <div className="mt-8 space-y-4 text-sm text-gray-500">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span>Entrega en 30-45 minutos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span>Pago seguro con cifrado SSL</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span>Política de devolución de 30 días</span>
                    </div>
                  </div>
                </div>

                {/* Continue Shopping */}
                <div className="mt-6">
                  <Link
                    to="/"
                    className="group flex items-center justify-center gap-2 text-gray-700 hover:text-green-700 font-medium transition-colors"
                  >
                    <span>Seguir comprando</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}