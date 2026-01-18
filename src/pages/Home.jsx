import { useState, useMemo } from "react";
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
} from "react-icons/fa";
import { GiKnifeFork, GiOlive } from "react-icons/gi";

const categories = [
  {
    id: "todos",
    label: "Todos",
    icon: <GiKnifeFork />,
    color: "from-gray-600 to-gray-700",
  },
  {
    id: "antipasti",
    label: "Antipasti",
    icon: <FaLeaf />,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "primi",
    label: "Primi Piatti",
    icon: <FaUtensils />,
    color: "from-red-500 to-orange-500",
  },
  {
    id: "secondi",
    label: "Secondi Piatti",
    icon: <GiOlive />,
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "dolci",
    label: "Dolci",
    icon: <FaStar />,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "bevande",
    label: "Bevande",
    icon: <FaWineGlassAlt />,
    color: "from-purple-500 to-indigo-500",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const filteredProducts = useMemo(() => {
    return selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl mt-8 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/90 to-emerald-800/90"></div>
        <div className="relative z-10 px-8 py-16 md:py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <FaFire className="text-amber-300 animate-pulse" />
              <span className="text-white font-semibold text-sm">
                ESPECIALIDAD SICILIANA
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              La <span className="text-amber-300">Caponata</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Auténtica cocina siciliana donde tradición y sabor se encuentran
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="flex items-center gap-3 text-white bg-white/10 px-6 py-3 rounded-xl">
                <FaMapMarkerAlt />
                <div>
                  <div className="font-semibold">Centro Histórico</div>
                  <div className="text-sm text-white/80">Quito, Ecuador</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white bg-white/10 px-6 py-3 rounded-xl">
                <FaClock />
                <div>
                  <div className="font-semibold">Abierto Hoy</div>
                  <div className="text-sm text-white/80">
                    12:00 PM - 10:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOCIONES */}
      <section className="my-16">
        <Promotions />
      </section>

      {/* CATEGORÍAS */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = categoryCounts[cat.id];

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`flex flex-col items-center p-5 rounded-2xl transition-all
                  ${
                    isActive
                      ? `bg-gradient-to-br ${cat.color} scale-105 shadow-xl`
                      : "bg-white shadow hover:-translate-y-1"
                  }`}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 text-2xl bg-white text-gray-800">
                  {cat.icon}
                </div>

                <span
                  className={`font-semibold ${
                    isActive ? "text-white" : "text-gray-800"
                  }`}
                >
                  {cat.label}
                </span>

                <span
                  className={`text-sm ${
                    isActive ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  {count} platos
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* PRODUCTOS */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* BOTÓN FLOTANTE → CHECKOUT */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <Link
          to="/checkout"
          className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-3 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 animate-bounce"
        >
          <FaUtensils />
          <span>Ordenar Ahora</span>
        </Link>
      </div>
    </main>
  );
}
