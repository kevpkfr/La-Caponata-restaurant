import { useState, useEffect } from "react";
import { blogPosts, reviews as initialReviews } from "../data/blog";
import ReviewCard from "../components/ReviewCard";
import {
  FaComment,
  FaStar,
  FaUserCircle,
  FaCalendarAlt,
  FaArrowRight,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

export default function Blog() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const [reviews, setReviews] = useState(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const [filterCategory, setFilterCategory] = useState("todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter blog posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = filterCategory === "todas" || post.category === filterCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories
  const categories = ["todas", ...new Set(blogPosts.map(post => post.category))];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* HERO */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
          <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
            Sabores & Experiencias
          </span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto px-4 text-sm sm:text-base">
          Historias, recetas y experiencias de la auténtica cocina italiana
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="flex items-center gap-2 text-green-700 px-3 py-1.5 bg-green-50 rounded-full">
            <FaComment className="text-sm" /> 
            <span className="text-sm font-medium">{blogPosts.length} Artículos</span>
          </div>
          <div className="flex items-center gap-2 text-amber-600 px-3 py-1.5 bg-amber-50 rounded-full">
            <FaStar className="text-sm" /> 
            <span className="text-sm font-medium">{reviews.length} Reseñas</span>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTERS - Mobile Collapsible */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar artículos..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle for Mobile */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-xl text-gray-700 font-medium"
          >
            <FaFilter />
            Filtrar
            {showFilters ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {/* Category Filters */}
        <div className={`${showFilters || !isMobile ? 'block' : 'hidden md:block'} mt-4 md:mt-6`}>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filterCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BLOG SECTION */}
      <section className="mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-0">
            Blog Gastronómico
          </h2>
          <div className="text-sm text-gray-500">
            Mostrando {filteredPosts.length} de {blogPosts.length} artículos
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <p className="text-gray-500">No se encontraron artículos con los filtros aplicados</p>
            <button
              onClick={() => {
                setFilterCategory("todas");
                setSearchQuery("");
              }}
              className="mt-4 text-green-600 font-medium hover:underline"
            >
              Mostrar todos los artículos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                {/* IMAGE */}
                <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                  <div className="absolute bottom-4 left-4 text-white text-sm flex items-center gap-2">
                    <FaCalendarAlt className="text-xs" /> 
                    <span className="text-xs sm:text-sm">{post.date}</span>
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <FaUserCircle className="text-2xl md:text-3xl text-green-600" />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm md:text-base truncate">{post.author}</p>
                      <p className="text-xs text-gray-500">Cocina Italiana</p>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base line-clamp-3 mb-4 md:mb-6 flex-grow">
                    {post.content}
                  </p>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center gap-2 text-green-700 font-semibold text-sm md:text-base group self-start"
                  >
                    Leer más
                    <FaArrowRight
                      className={`transition-transform ${
                        hoveredCard === post.id ? "translate-x-1" : ""
                      }`}
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* REVIEWS SECTION */}
      <section className="mb-16 md:mb-20">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 mb-4 shadow-lg">
            <FaStar className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Testimonios Reales
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Lo que dicen nuestros comensales sobre su experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, isMobile ? 2 : reviews.length).map((review) => (
            <div key={review.id} className="transform transition-transform duration-300 hover:-translate-y-1">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Show More Reviews on Mobile */}
        {isMobile && reviews.length > 2 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setReviews(initialReviews)}
              className="text-green-600 font-medium hover:underline"
            >
              Ver todas las reseñas ({reviews.length})
            </button>
          </div>
        )}

        <div className="mt-8 md:mt-12 text-center">
          <button
            onClick={() => setShowReviewForm(true)}
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            Dejar una Reseña
          </button>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="bg-gradient-to-r from-gray-50 to-white p-6 md:p-10 rounded-2xl text-center border border-gray-200 mb-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
          <FaComment className="text-white text-2xl" />
        </div>
        <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
          Suscríbete a Nuestro Blog
        </h3>
        <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
          Recibe recetas y promociones exclusivas
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
          />
          <button
            onClick={() => {
              if (email) {
                setSubscribed(true);
                setEmail("");
                setTimeout(() => setSubscribed(false), 3000);
              }
            }}
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap text-sm md:text-base"
          >
            Suscribirse
          </button>
        </div>

        {subscribed && (
          <p className="text-green-600 font-semibold mt-4 animate-fadeIn">
            ¡Gracias por suscribirte! 🎉
          </p>
        )}
      </section>

      {/* MODAL: LEER MÁS (Artículo completo) */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 md:p-6">
          <div className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 hover:bg-gray-100 transition-colors"
            >
              <FaTimes />
            </button>

            <div className="relative h-48 md:h-64">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-4 text-gray-500 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaUserCircle className="text-green-600" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{selectedPost.date}</span>
                </div>
              </div>
              <div className="prose prose-green max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: DEJAR RESEÑA */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 md:p-8 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold">Tu Reseña</h3>
              <button
                onClick={() => setShowReviewForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none h-40 text-sm md:text-base"
              placeholder="Cuéntanos tu experiencia en La Caponata..."
            />

            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setShowReviewForm(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-sm md:text-base"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  if (reviewText.trim()) {
                    setReviews([
                      {
                        id: Date.now(),
                        name: "Cliente Anónimo",
                        rating: 5,
                        comment: reviewText,
                        date: new Date().toLocaleDateString(),
                      },
                      ...reviews,
                    ]);
                    setReviewText("");
                    setShowReviewForm(false);
                  }
                }}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-200 text-sm md:text-base"
                disabled={!reviewText.trim()}
              >
                Publicar Reseña
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button for Mobile */}
      {isMobile && (
        <button
          onClick={() => setShowReviewForm(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-3 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          <FaStar />
          <span>Reseña</span>
        </button>
      )}
    </main>
  );
}