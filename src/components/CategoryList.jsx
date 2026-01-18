import { Link } from "react-router-dom";
import { categories } from "../data/categories";

export default function CategoryList() {
  return (
    <section className="mb-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Explora nuestro menú
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <Link
              key={cat.name}
              to={`/categoria/${cat.name}`}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:scale-105 transition"
            >
              <Icon className="text-red-600 text-4xl mb-3" />
              <span className="font-semibold text-gray-700">
                {cat.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
