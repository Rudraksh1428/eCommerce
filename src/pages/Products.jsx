import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/Data";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="px-6 md:px-12 lg:px-16 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            {category || "All Products"}
          </h1>

          <p className="text-gray-500 mt-1">
            {filteredProducts.length} products found
          </p>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />

              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition z-10"
              >
                <span
                  className={`text-xl ${
                    wishlist.includes(product.id)
                      ? "text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  {wishlist.includes(product.id) ? "♥" : "♡"}
                </span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">
            No products found
          </h2>

          <p className="text-gray-500 mt-2">
            Try selecting another category.
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;