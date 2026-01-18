import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-800">
          {review.name}
        </h4>
        <div className="flex gap-1 text-yellow-400">
          {Array.from({ length: review.rating }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        {review.comment}
      </p>
    </div>
  );
}
