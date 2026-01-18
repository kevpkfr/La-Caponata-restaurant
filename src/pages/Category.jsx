import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { FaSearch, FaUtensils } from "react-icons/fa";

export default function Category() {
  const { name } = useParams();
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    (p) =>
      p.category === name &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Encabezado */}
      <div className="flex items-center gap-3 mb-6">
        <FaUtensils className="text-red-600 text-3xl" />
        <h2 className="text-3xl font-extrabold text-gray-800 capitalize">
          {name}
        </h2>
      </div>

      {/* Buscador */}
      <div className="mb-6 max-w-md">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Resultados */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-16 text-gray-500">
          <FaSearch className="text-5xl mb-4 text-gray-400" />
          <p className="text-lg font-semibold">
            No se encontraron productos
          </p>
          <p className="text-sm">
            Intenta con otro nombre o revisa más categorías
          </p>
        </div>
      )}
    </main>
  );
}
