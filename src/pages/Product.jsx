import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import {
  FaShoppingCart,
  FaArrowLeft,
  FaTag,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Producto no encontrado
      </div>
    );
  }

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => quantity > 1 && setQuantity((q) => q - 1);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Volver */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <FaArrowLeft />
        Volver al menú
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-8">
        {/* Imagen */}
        <div className="relative">
          {product.promo && (
            <span className="absolute top-3 left-3 flex items-center gap-1 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
              <FaTag /> Promo
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover rounded-xl"
          />
        </div>

        {/* Información */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
              {product.name}
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-red-600">
                ${product.price.toFixed(2)}
              </span>

              {product.promo && (
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Oferta especial
                </span>
              )}
            </div>

            {/* Cantidad */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700">
                Cantidad:
              </span>

              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={decrease}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <FaMinus />
                </button>
                <span className="px-4 font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={increase}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          {/* Botón carrito */}
          <button
            onClick={() => addToCart({ ...product, quantity })}
            className="mt-8 flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl text-lg font-bold transition"
          >
            <FaShoppingCart />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
