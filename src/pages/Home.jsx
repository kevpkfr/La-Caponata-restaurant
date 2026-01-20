import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Promotions from "../components/Promotions";
import {
  FaFire,
  FaUtensils,
  FaWineGlassAlt,
  FaLeaf,
  FaStar,
  FaChevronRight,
  FaMapMarkerAlt,
  FaClock,
  FaShippingFast,
  FaGift,
  FaCrown,
  FaPercent,
  FaUserFriends,
  FaCalendarAlt,
  FaWhatsapp,
  FaSearch,
  FaTimes,
  FaFilter,
  FaTag,
  FaShoppingCart,
} from "react-icons/fa";
import { GiKnifeFork, GiOlive, GiPartyPopper, GiTwoCoins, GiMeat } from "react-icons/gi";

const categories = [
  {
    id: "todos",
    label: "Todos",
    icon: <GiKnifeFork />,
    color: "from-gray-600 to-gray-700",
    description: "Todo nuestro menú"
  },
  {
    id: "antipasti",
    label: "Antipasti",
    icon: <FaLeaf />,
    color: "from-green-500 to-emerald-600",
    description: "Entradas tradicionales"
  },
  {
    id: "primi",
    label: "Primi Piatti",
    icon: <FaUtensils />,
    color: "from-red-500 to-orange-500",
    description: "Pastas y risottos"
  },
  {
    id: "secondi",
    label: "Secondi Piatti",
    icon: <GiOlive />,
    color: "from-amber-500 to-yellow-500",
    description: "Platos principales"
  },
  {
    id: "dolci",
    label: "Dolci",
    icon: <FaStar />,
    color: "from-pink-500 to-rose-500",
    description: "Postres italianos"
  },
  {
    id: "bevande",
    label: "Bevande",
    icon: <FaWineGlassAlt />,
    color: "from-purple-500 to-indigo-500",
    description: "Bebidas y vinos"
  },
];

const specialOffers = [
  {
    id: "happy-hour",
    title: "Happy Hour Italiano",
    description: "De 4:00 PM a 7:00 PM, 2x1 en todas las bebidas italianas",
    icon: <FaClock className="text-amber-500" />,
    discount: "2x1",
    color: "from-amber-500 to-orange-500",
    time: "4:00 PM - 7:00 PM",
    days: "Lunes a Viernes",
    category: "bebidas"
  },
  {
    id: "family-friday",
    title: "Viernes Familiar",
    description: "Menú familiar para 4 personas + postre gratis por $49.99",
    icon: <FaUserFriends className="text-green-500" />,
    discount: "25% OFF",
    color: "from-green-500 to-emerald-600",
    includes: "Postre de la casa incluido",
    price: "$49.99"
  },
  {
    id: "first-order",
    title: "Primera Orden",
    description: "15% de descuento en tu primer pedido online",
    icon: <FaGift className="text-purple-500" />,
    discount: "15% OFF",
    color: "from-purple-500 to-pink-500",
    code: "BIENVENIDO15"
  },
  {
    id: "wine-pairing",
    title: "Maridaje Perfecto",
    description: "Compra cualquier pasta y llévate el vino a mitad de precio",
    icon: <FaWineGlassAlt className="text-red-500" />,
    discount: "50% OFF",
    color: "from-red-500 to-rose-500",
    pairing: "Vino tinto o blanco",
    category: "primi"
  },
  {
    id: "pizza-tuesday",
    title: "Martes de Pizza",
    description: "Todas nuestras pizzas con 20% de descuento",
    icon: <GiMeat className="text-orange-500" />,
    discount: "20% OFF",
    color: "from-orange-500 to-red-500",
    category: "pizzas",
    day: "Martes"
  },
  {
    id: "dessert-combo",
    title: "Combo Postres",
    description: "2 postres italianos + café por $12.99",
    icon: <FaStar className="text-pink-500" />,
    discount: "30% OFF",
    color: "from-pink-500 to-rose-500",
    price: "$12.99",
    category: "dolci"
  }
];

const dailySpecials = [
  {
    day: "Lunes",
    special: "Pizza Margherita 20% OFF",
    icon: "🍕",
    discount: "20%",
    color: "bg-red-50 border-red-100"
  },
  {
    day: "Martes",
    special: "Pasta del día a precio especial",
    icon: "🍝",
    discount: "15%",
    color: "bg-orange-50 border-orange-100"
  },
  {
    day: "Miércoles",
    special: "Copa de vino gratis con segundo plato",
    icon: "🍷",
    discount: "GRATIS",
    color: "bg-purple-50 border-purple-100"
  },
  {
    day: "Jueves",
    special: "Antipasti para compartir 2x1",
    icon: "🧀",
    discount: "2x1",
    color: "bg-green-50 border-green-100"
  },
  {
    day: "Viernes",
    special: "Pesce del día con 15% descuento",
    icon: "🐟",
    discount: "15%",
    color: "bg-blue-50 border-blue-100"
  },
  {
    day: "Sábado",
    special: "Cena romántica: Postre de cortesía",
    icon: "💝",
    discount: "GRATIS",
    color: "bg-pink-50 border-pink-100"
  },
  {
    day: "Domingo",
    special: "Brunch italiano + mimosa gratis",
    icon: "🥂",
    discount: "INCLUIDO",
    color: "bg-amber-50 border-amber-100"
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showAllOffers, setShowAllOffers] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = {};
    categories.forEach((cat) => {
      counts[cat.id] =
        cat.id === "todos"
          ? products.length
          : products.filter((p) => p.category === cat.id).length;
    });
    return counts;
  }, []);

  // Products on promotion
  const promoProducts = useMemo(() => {
    return products.filter(product => product.promo).slice(0, 4);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      setSelectedCategory("todos");
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Get search result count
  const searchResultCount = searchQuery.trim() ? filteredProducts.length : null;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl mt-4 md:mt-8 mb-12 md:mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/90 to-emerald-800/90"></div>
        <div className="relative z-10 px-4 sm:px-8 py-12 sm:py-16 md:py-24 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badges de ofertas en hero */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <FaFire className="text-amber-300 animate-pulse text-sm sm:text-base" />
                <span className="text-white font-semibold text-xs sm:text-sm">
                  ESPECIALIDAD SICILIANA
                </span>
              </div>
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-amber-500/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <GiPartyPopper className="text-amber-300 text-sm sm:text-base" />
                <span className="text-white font-semibold text-xs sm:text-sm">
                  OFERTAS EXCLUSIVAS
                </span>
              </div>
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-red-500/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <FaTag className="text-red-300 text-sm sm:text-base" />
                <span className="text-white font-semibold text-xs sm:text-sm">
                  35+ PLATOS
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              La <span className="text-amber-300">Caponata</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 px-4">
              Auténtica cocina siciliana con las mejores promociones de Quito
            </p>

            {/* SEARCH BAR IN HERO */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Busca entre nuestros 35+ platos..."
                  className="w-full pl-12 pr-12 py-3 sm:py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-green-700 bg-white/20 backdrop-blur-sm text-white placeholder-white/70"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
              {searchResultCount !== null && (
                <div className="text-white/80 text-sm mt-2">
                  {searchResultCount === 0 ? (
                    "No se encontraron platos con esa búsqueda"
                  ) : (
                    `${searchResultCount} ${searchResultCount === 1 ? 'plato encontrado' : 'platos encontrados'}`
                  )}
                </div>
              )}
            </div>

            {/* Info Cards */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 text-white bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl w-full sm:w-auto">
                <FaMapMarkerAlt className="text-sm sm:text-base" />
                <div className="text-left">
                  <div className="font-semibold text-xs sm:text-sm">Centro Histórico</div>
                  <div className="text-xs text-white/80">Quito, Ecuador</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-white bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl w-full sm:w-auto">
                <FaClock className="text-sm sm:text-base" />
                <div className="text-left">
                  <div className="font-semibold text-xs sm:text-sm">Abierto Hoy</div>
                  <div className="text-xs text-white/80">12:00 PM - 10:00 PM</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-white bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl w-full sm:w-auto">
                <FaShippingFast className="text-sm sm:text-base" />
                <div className="text-left">
                  <div className="font-semibold text-xs sm:text-sm">Delivery Gratis</div>
                  <div className="text-xs text-white/80">Desde $20</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-amber-300/20 to-transparent rounded-full -translate-x-24 sm:-translate-x-32 -translate-y-24 sm:-translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tl from-emerald-400/10 to-transparent rounded-full translate-x-32 sm:translate-x-48 translate-y-32 sm:translate-y-48"></div>
      </section>

      {/* MOBILE SEARCH TOGGLE */}
      {isMobile && !showSearch && (
        <div className="fixed bottom-20 right-6 z-40">
          <button
            onClick={() => setShowSearch(true)}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <FaSearch className="text-xl" />
          </button>
        </div>
      )}

      {/* MOBILE SEARCH MODAL */}
      {isMobile && showSearch && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-md">
            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Buscar platos..."
                className="w-full pl-12 pr-12 py-4 rounded-xl border-0 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-green-500"
                autoFocus
              />
              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            {searchResultCount !== null && (
              <div className="text-white text-center mb-4">
                {searchResultCount} resultados
              </div>
            )}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-h-60 overflow-y-auto">
              {searchQuery && filteredProducts.slice(0, 5).map(product => (
                <Link
                  key={product.id}
                  to={`/producto/${product.slug}`}
                  className="block p-3 hover:bg-white/10 rounded-lg mb-2 last:mb-0"
                  onClick={() => setShowSearch(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 overflow-hidden">
                      {product.image && (
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white truncate">{product.name}</div>
                      <div className="text-xs text-white/70">${product.price.toFixed(2)}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECCIÓN DE OFERTAS ESPECIALES */}
      <section className="mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <GiTwoCoins className="text-white text-xl md:text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Ofertas <span className="text-amber-600">Destacadas</span>
              </h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base">Promociones exclusivas que no te puedes perder</p>
          </div>
          
          <button
            onClick={() => setShowAllOffers(!showAllOffers)}
            className="mt-4 md:mt-0 flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 text-sm md:text-base"
          >
            {showAllOffers ? "Ver menos" : "Ver todas las ofertas"}
            <FaChevronRight className={`transition-transform ${showAllOffers ? "rotate-90" : ""}`} />
          </button>
        </div>

        {/* Grid de Ofertas Especiales */}
        <div className={`grid grid-cols-1 ${showAllOffers ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-4 md:gap-6 mb-6 md:mb-8`}>
          {specialOffers.slice(0, showAllOffers ? specialOffers.length : 3).map((offer) => (
            <div
              key={offer.id}
              className={`bg-gradient-to-br ${offer.color}/10 border ${offer.color}/20 rounded-2xl p-4 md:p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center shadow-lg">
                  {offer.icon}
                </div>
                <span className="px-2 md:px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs md:text-sm font-bold rounded-full">
                  {offer.discount}
                </span>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
              <p className="text-gray-600 text-sm mb-3 md:mb-4 flex-grow">{offer.description}</p>
              
              <div className="space-y-1 md:space-y-2">
                {offer.time && (
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                    <FaClock className="text-amber-500" />
                    <span>{offer.time}</span>
                  </div>
                )}
                {offer.code && (
                  <div className="flex items-center gap-2">
                    <FaCrown className="text-purple-500" />
                    <code className="bg-gray-100 px-2 md:px-3 py-1 rounded-lg font-mono font-bold text-gray-800 text-xs md:text-sm">
                      {offer.code}
                    </code>
                  </div>
                )}
                {offer.price && (
                  <div className="text-sm md:text-base font-bold text-gray-900">
                    Solo {offer.price}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Especiales del Día */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
            <FaCalendarAlt className="text-green-600" />
            Especiales de la Semana
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2 md:gap-3">
            {dailySpecials.map((daySpecial) => (
              <div
                key={daySpecial.day}
                className={`${daySpecial.color} rounded-xl p-3 md:p-4 text-center hover:shadow-md transition-shadow flex flex-col items-center`}
              >
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">{daySpecial.icon}</div>
                <div className="font-bold text-gray-900 text-sm md:text-base mb-1">{daySpecial.day}</div>
                <div className="text-xs text-gray-600 line-clamp-2 mb-2">{daySpecial.special}</div>
                <div className="px-2 py-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-xs font-bold rounded-full">
                  {daySpecial.discount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENTE DE PROMOCIONES */}
      <section className="my-12 md:my-16">
        <Promotions />
      </section>

      {/* PRODUCTOS EN OFERTA */}
      <section className="mb-10 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Platos <span className="text-green-600">Destacados</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base">Nuestros productos más populares con ofertas especiales</p>
          </div>
          <Link
            to="/ofertas"
            className="hidden md:flex items-center gap-2 text-green-700 font-semibold hover:text-green-800"
          >
            Ver todos los productos en oferta
            <FaChevronRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {promoProducts.map((product) => (
            <div key={product.id} className="relative">
              <div className="absolute -top-2 -right-2 z-10">
                <span className="px-2 md:px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                  ¡OFERTA!
                </span>
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Link
            to="/ofertas"
            className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 text-sm"
          >
            Ver todas las ofertas
            <FaChevronRight />
          </Link>
        </div>
      </section>

      {/* SEARCH RESULTS HEADER */}
      {searchQuery.trim() && (
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-4 md:p-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                Resultados de búsqueda: "{searchQuery}"
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'plato encontrado' : 'platos encontrados'}
              </p>
            </div>
            <button
              onClick={clearSearch}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm md:text-base"
            >
              <FaTimes />
              Limpiar búsqueda
            </button>
          </div>
        </div>
      )}

      {/* CATEGORÍAS */}
      <section className="mb-12 md:mb-16">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Explora Nuestro <span className="text-green-600">Menú</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm md:text-base">
            Selecciona una categoría para descubrir nuestros platos sicilianos
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const isHovered = hoveredCategory === cat.id;
            const count = categoryCounts[cat.id];

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSearchQuery(""); // Clear search when selecting category
                }}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative group flex flex-col items-center p-3 md:p-4 lg:p-5 rounded-2xl transition-all duration-300 transform
                  ${isActive 
                    ? `bg-gradient-to-br ${cat.color} scale-105 shadow-xl md:shadow-2xl` 
                    : 'bg-white shadow-md hover:shadow-xl hover:-translate-y-1'
                  }`}
              >
                {/* Hover Effect */}
                {isHovered && !isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-5 rounded-2xl`}></div>
                )}
                
                {/* Icon */}
                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl transition-all duration-300
                  ${isActive 
                    ? 'bg-white text-gray-800' 
                    : `bg-gradient-to-br ${cat.color} text-white`
                  }`}>
                  {cat.icon}
                </div>
                
                {/* Label */}
                <span className={`font-semibold text-xs md:text-sm lg:text-base mb-1 transition-colors duration-300 line-clamp-2 text-center
                  ${isActive ? 'text-white' : 'text-gray-800'}`}>
                  {cat.label}
                </span>
                
                {/* Count */}
                <span className={`text-xs transition-colors duration-300
                  ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                  {count} platos
                </span>
                
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -bottom-1.5 md:-bottom-2 w-6 md:w-8 lg:w-10 h-0.5 md:h-1 bg-white rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* PRODUCTOS FILTRADOS */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {searchQuery.trim() 
                ? `Resultados para "${searchQuery}"`
                : selectedCategory === "todos" 
                  ? "Nuestro Menú Completo" 
                  : `${categories.find(c => c.id === selectedCategory)?.label}`
              }
            </h2>
            <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
              {filteredProducts.length} platos disponibles
              {searchQuery.trim() && selectedCategory !== "todos" && 
                ` en ${categories.find(c => c.id === selectedCategory)?.label}`
              }
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-green-50 text-green-700 px-3 md:px-4 py-1.5 md:py-2 rounded-xl mt-2 md:mt-0">
            <FaPercent className="text-green-600" />
            <span className="font-semibold text-sm md:text-base">
              {Math.round((promoProducts.length / products.length) * 100)}% en oferta
            </span>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 md:py-16 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <FaSearch className="text-gray-400 text-2xl md:text-3xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2 md:mb-3">
              {searchQuery.trim() ? "No se encontraron platos" : "No hay platos disponibles"}
            </h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6 md:mb-8 text-sm md:text-base px-4">
              {searchQuery.trim() 
                ? "Intenta con otros términos o revisa nuestras categorías"
                : "Lo sentimos, no tenemos platos en esta categoría en este momento."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {searchQuery.trim() && (
                <button
                  onClick={clearSearch}
                  className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-200 text-sm md:text-base"
                >
                  Limpiar búsqueda
                </button>
              )}
              <button
                onClick={() => {
                  setSelectedCategory("todos");
                  setSearchQuery("");
                }}
                className="px-4 md:px-6 py-2 md:py-3 bg-white border-2 border-green-600 text-green-700 font-semibold rounded-xl hover:bg-green-50 transition-all duration-200 text-sm md:text-base"
              >
                Ver Todos los Platos
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Pagination/View More */}
            {filteredProducts.length > 12 && (
              <div className="text-center mt-8 md:mt-12">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-bold rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base">
                  Ver más platos ({filteredProducts.length - 12} restantes)
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/593991234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 md:px-6 py-3 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
        >
          <FaWhatsapp className="text-lg md:text-xl" />
          <span className="hidden sm:inline">Pedir por WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>

      {/* BOTÓN FLOTANTE OFERTAS EN MÓVIL */}
      <div className="fixed bottom-32 right-6 z-40 md:hidden">
        <Link
          to="/ofertas"
          className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
          <FaTag />
          <span>Ofertas</span>
        </Link>
      </div>

      {/* BOTÓN FLOTANTE CARRITO EN MÓVIL */}
      <div className="fixed bottom-44 right-6 z-40 md:hidden">
        <Link
          to="/carrito"
          className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-3 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
          <FaShoppingCart />
          <span>Carrito</span>
        </Link>
      </div>

      {/* Mobile Stats Bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-30">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="text-lg font-bold text-green-700">{products.length}</div>
              <div className="text-xs text-gray-600">Platos</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-amber-600">{specialOffers.length}</div>
              <div className="text-xs text-gray-600">Ofertas</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-red-500">{promoProducts.length}</div>
              <div className="text-xs text-gray-600">En promoción</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}