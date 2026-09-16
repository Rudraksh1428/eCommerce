import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ">
      <div className="h-64 overflow-hidden bg-gray-100">
        <img
          src={product.img}
          alt={product.description}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 text-sm font-medium text-blue-600">
          {product.category}
        </p>

        <h2 className="mb-3 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.description}
        </h2>

        <div className="mb-4 flex items-center gap-1 text-sm text-gray-600">
          <Star size={17} className="fill-yellow-400 text-yellow-400" />
          <span>{product.rating}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price}
          </span>

          <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
