import React from "react";
import { Link } from "react-router-dom";
import products from "../data/Data";

const BestSellers = () => {
  const bestSellers = products
    .filter((product) => product.rating >= 4.7)
    .slice(0, 8);

  return (
    <section className="px-6 md:px-12 lg:px-16 py-10">
      <div className="flex items-center justify-between mb-7">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Best Sellers
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Our most loved products
          </p>
        </div>

        <Link
          to="/products"
          className="text-sm font-semibold hover:underline"
        >
          See all
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group"
          >
            <div className="w-full h-52 overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.img}
                alt={product.description}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="mt-3">
              <p className="text-xs text-gray-500">
                {product.category}
              </p>

              <h3 className="font-semibold mt-1">
                {product.description}
              </h3>

              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-medium">
                  {product.rating}
                </span>
              </div>

              <p className="font-bold text-lg mt-1">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;