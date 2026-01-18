import {
  FaFire,
  FaPizzaSlice,
  FaWineGlassAlt,
  FaCheese,
  FaClock,
  FaTag,
  FaPercentage,
  FaGift,
  FaCalendarAlt,
  FaArrowRight,
  FaCrown
} from "react-icons/fa";
import { GiOlive, GiWineBottle } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Promotions() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const promotions = [
    {
      id: 1,
      title: "Martes de Pizza Artesanal",
      description: "Disfruta de un 20% de descuento en nuestras pizzas sicilianas preparadas en horno de leña artesanal.",
      icon: <FaPizzaSlice />,
      category: "Pizzas",
      discount: "20% OFF",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      iconColor: "text-red-600",
      link: "/categoria/pizzas",
      expires: "Hasta agotar existencias",
      badge: "POPULAR",
      timeIcon: <FaClock />
    },
    {
      id: 2,
      title: "Antipasti para Compartir",
      description: "Acompaña tu experiencia con entradas tradicionales italianas a un precio especial para grupos.",
      icon: <FaCheese />,
      category: "Entradas",
      discount: "2x1",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      iconColor: "text-amber-600",
      link: "/categoria/antipasti",
      expires: "Todo el mes",
      badge: "RECOMENDADO",
      timeIcon: <FaCalendarAlt />
    },
    {
      id: 3,
      title: "Copa de Vino de Cortesía",
      description: "En consumos mayores a $15 recibe una copa de vino seleccionada de la casa.",
      icon: <FaWineGlassAlt />,
      category: "Bebidas",
      discount: "Gratis",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
      link: "/categoria/bebidas",
      expires: "Válido por tiempo limitado",
      badge: "EXCLUSIVO",
      timeIcon: <GiWineBottle />
    }
  ];

  return (
    <section className="relative mb-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-red-50/10 rounded-3xl -z-10"></div>
      
      {/* Promo Header */}
      <div className="relative mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-70"></div>
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-xl">
                <FaFire className="text-white text-2xl animate-pulse" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Ofertas Especiales
                </span>
              </h2>
              <p className="text-gray-600 mt-2 flex items-center gap-2">
                <FaTag className="text-orange-500" />
                Promociones limitadas para disfrutar de la auténtica experiencia italiana
              </p>
            </div>
          </div>
          
          {/* Timer/Status */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-white to-orange-50 border border-orange-100 rounded-2xl px-6 py-3 shadow-sm">
            <FaClock className="text-orange-500" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Ofertas Activas</div>
              <div className="text-sm text-gray-500">{promotions.length} promociones</div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-red-200/20 to-transparent rounded-full blur-xl"></div>
      </div>

      {/* Promotions Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {promotions.map((promo) => {
          const isHovered = hoveredCard === promo.id;
          
          return (
            <div
              key={promo.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(promo.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-6 z-20">
                <span className={`px-4 py-1.5 text-xs font-bold text-white rounded-full bg-gradient-to-r ${promo.color} shadow-lg flex items-center gap-2`}>
                  <FaCrown className="text-xs" />
                  {promo.badge}
                </span>
              </div>
              
              {/* Main Card */}
              <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${promo.bgColor} border-2 ${
                isHovered ? 'border-orange-300 shadow-2xl scale-[1.02]' : 'border-transparent shadow-xl'
              }`}>
                {/* Discount Ribbon */}
                <div className={`absolute top-6 right-0 bg-gradient-to-l ${promo.color} text-white px-5 py-2 rounded-l-lg shadow-lg flex items-center gap-2`}>
                  <FaPercentage />
                  <span className="font-bold text-lg">{promo.discount}</span>
                </div>
                
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-current to-transparent rounded-full"></div>
                </div>
                
                <div className="relative p-7">
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className={`w-16 h-16 rounded-2xl ${promo.bgColor} border-2 border-white shadow-lg flex items-center justify-center text-3xl ${promo.iconColor}`}>
                      {promo.icon}
                    </div>
                    
                    {/* Category Tag */}
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full border">
                      {promo.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {promo.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {promo.description}
                  </p>
                  
                  {/* Details */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 text-gray-500">
                      {promo.timeIcon}
                      <span className="text-sm">{promo.expires}</span>
                    </div>
                    
                    {/* Remaining Days */}
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-medium text-green-600">Disponible</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    to={promo.link}
                    className="group/btn flex items-center justify-center gap-3 w-full py-3.5 bg-white border-2 border-orange-200 text-orange-700 font-bold rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <span>Ver Oferta</span>
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Hover Effect Overlay */}
                {isHovered && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-5 pointer-events-none`}></div>
                )}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          );
        })}
      </div>

      {/* Additional Promo Info */}
      <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <FaGift className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">¿Eres Miembro del Club?</h3>
                <p className="text-gray-300">
                  Desbloquea promociones exclusivas y obtén puntos por cada compra
                </p>
              </div>
            </div>
            
            <button className="group flex items-center gap-3 px-8 py-3.5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Unirse al Club</span>
              <GiOlive className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">20%</div>
              <div className="text-sm text-gray-300">Descuento máximo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">3</div>
              <div className="text-sm text-gray-300">Promociones activas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">24/7</div>
              <div className="text-sm text-gray-300">Reservas online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">100+</div>
              <div className="text-sm text-gray-300">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40 md:hidden">
        <button className="group flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 animate-bounce">
          <FaTag />
          <span>Ver Todas</span>
        </button>
      </div>
    </section>
  );
}