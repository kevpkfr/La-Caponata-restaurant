import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaCreditCard,
  FaShieldAlt,
  FaClock,
  FaMotorcycle,
  FaCheckCircle,
  FaLock,
  FaReceipt,
  FaUserCheck,
  FaMapPin,
  FaWhatsapp
} from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Checkout() {
  const { cart, clearCart, total } = useCart();
  const { createOrder } = useOrders();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    paymentMethod: "efectivo"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular procesamiento
    setTimeout(() => {
      const order = {
        id: Date.now(),
        customer: form,
        products: cart,
        total,
        date: new Date().toLocaleString(),
        status: "pendiente",
        orderNumber: `ORD-${Date.now().toString().slice(-6)}`
      };

      createOrder(order);
      clearCart();
      navigate("/confirmacion");
      setIsSubmitting(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaShoppingBag className="text-gray-400 text-6xl" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Carrito Vacío</h3>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            No hay productos en tu carrito. Añade algunos platos para continuar con tu pedido.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <FaShoppingBag />
            <span>Volver al Menú</span>
          </button>
        </div>
      </div>
    );
  }

  const calculateTotalWithTax = () => total * 1.12;
  const deliveryFee = total > 20 ? 0 : 3.5;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 mb-6 shadow-xl">
            <FaLock className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Finalizar <span className="text-green-600">Pedido</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Completa tus datos para procesar tu pedido de forma segura
          </p>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="w-24 h-1 bg-green-600"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="w-24 h-1 bg-gray-300"></div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                3
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-24 text-sm">
            <span className="font-semibold text-green-700">Carrito</span>
            <span className="font-semibold text-green-700">Checkout</span>
            <span className="text-gray-500">Confirmación</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Customer Info */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FaUserCheck className="text-2xl" />
                  Información Personal
                </h3>
                <p className="text-green-100 mt-2">
                  Tus datos están protegidos con cifrado SSL
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FaUser />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ej: María González"
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        onChange={handleChange}
                        value={form.name}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FaWhatsapp />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Ej: 099 123 4567"
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        onChange={handleChange}
                        value={form.phone}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Dirección de entrega *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaMapPin />
                    </div>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Ej: Av. Amazonas N34-123 y Av. Patria"
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      onChange={handleChange}
                      value={form.address}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Instrucciones especiales (opcional)
                  </label>
                  <textarea
                    name="notes"
                    placeholder="Ej: Llamar antes de llegar, entregar en portería, sin picante, etc."
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none h-32"
                    onChange={handleChange}
                    value={form.notes}
                  />
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <FaCreditCard />
                    Método de Pago
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`cursor-pointer border-2 rounded-xl p-4 transition-all ${form.paymentMethod === 'efectivo' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="efectivo"
                        checked={form.paymentMethod === 'efectivo'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${form.paymentMethod === 'efectivo' ? 'border-green-500' : 'border-gray-300'}`}>
                          {form.paymentMethod === 'efectivo' && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                        </div>
                        <div>
                          <GiTakeMyMoney className="text-2xl text-gray-700" />
                          <span className="font-semibold block mt-2">Efectivo</span>
                          <span className="text-sm text-gray-500">Paga al recibir</span>
                        </div>
                      </div>
                    </label>

                    <label className={`cursor-pointer border-2 rounded-xl p-4 transition-all ${form.paymentMethod === 'tarjeta' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="tarjeta"
                        checked={form.paymentMethod === 'tarjeta'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${form.paymentMethod === 'tarjeta' ? 'border-green-500' : 'border-gray-300'}`}>
                          {form.paymentMethod === 'tarjeta' && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                        </div>
                        <div>
                          <FaCreditCard className="text-2xl text-gray-700" />
                          <span className="font-semibold block mt-2">Tarjeta</span>
                          <span className="text-sm text-gray-500">Pago seguro online</span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <FaShieldAlt className="text-blue-600 text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-blue-800">Protección de datos</p>
                      <p className="text-sm text-blue-600">
                        Tu información personal está protegida con cifrado SSL de 256-bit. 
                        No compartimos tus datos con terceros.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800'} text-white shadow-xl hover:shadow-2xl`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Procesando pedido...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <FaCheckCircle className="text-xl" />
                      Confirmar Pedido • ${calculateTotalWithTax().toFixed(2)}
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaReceipt className="text-green-600" />
                Resumen del Pedido
              </h3>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 overflow-hidden flex-shrink-0">
                      {item.image && (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                        </div>
                        <span className="font-bold text-green-700">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className={deliveryFee === 0 ? "text-green-600 font-semibold" : "font-semibold"}>
                    {deliveryFee === 0 ? "Gratis" : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IVA (12%)</span>
                  <span className="font-semibold">${(total * 0.12).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-700">
                        ${(calculateTotalWithTax() + deliveryFee).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">IVA y envío incluidos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaMotorcycle className="text-green-600" />
                Información de Entrega
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaClock className="text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">30-45 minutos</p>
                    <p className="text-sm text-gray-600">Tiempo estimado de entrega</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Zona de cobertura</p>
                    <p className="text-sm text-gray-600">Centro Histórico y áreas cercanas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">¿Necesitas ayuda?</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Si tienes preguntas sobre tu pedido o necesitas modificar algo:
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <FaWhatsapp className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-sm text-gray-600">+593 99 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}