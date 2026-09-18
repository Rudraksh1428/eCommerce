import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
  },
];

const Categories = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-10">
      <div className="flex items-center justify-between mb-7">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Explore Various Categories
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Find products that match your style
          </p>
        </div>

        <Link
          to="/products"
          className="text-sm font-semibold text-gray-700 hover:text-black hover:underline"
        >
          See all
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${encodeURIComponent(category.name)}`}
            className="group"
          >
            <div className="w-full h-40 md:h-44 overflow-hidden rounded-xl bg-gray-100">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <p className="text-center mt-3 text-base md:text-lg font-semibold text-gray-800 group-hover:text-black">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
