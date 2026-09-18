import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  },
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    name: "Home & Living",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
];

const Categories = () => {
  return (
    <section className="px-6 md:px-12 py-10">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Explore Various Categories
        </h2>

        <Link
          to="/products"
          className="text-sm font-semibold hover:underline"
        >
          See all
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${encodeURIComponent(category.name)}`}
            className="group text-center"
          >
            <div className="h-40 overflow-hidden rounded-xl bg-gray-100">

              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

            </div>

            <p className="mt-3 font-semibold">
              {category.name}
            </p>
          </Link>
        ))}

      </div>

    </section>
  );
};

export default Categories;