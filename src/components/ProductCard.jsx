import { Link } from "react-router-dom";
import { FaShoppingCart, FaTag } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Imagen */}
      <Link to={`/producto/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {product.description}
        </p>

        {/* Precio + promo */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-red-600">
            ${product.price.toFixed(2)}
          </span>

          {product.promo && (
            <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              <FaTag /> Promo
            </span>
          )}
        </div>

        {/* Botón */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          <FaShoppingCart />
          Agregar
        </button>
      </div>
    </div>
  );
}
