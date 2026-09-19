import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import products from "../data/Data";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, search]);

  let filteredProducts = products;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      `${product.description} ${product.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }

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
            {search
              ? `Search results for "${search}"`
              : category || "All Products"}
          </h1>

          <p className="text-gray-500 mt-1">
            {filteredProducts.length} products found
          </p>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="relative"
              >
                <Link to={`/products/${product.id}`}>
                  <ProductCard product={product} />
                </Link>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition z-10"
                >
                  <span
                    className={`text-xl ${
                      isWishlisted
                        ? "text-red-500"
                        : "text-gray-700"
                    }`}
                  >
                    {isWishlisted ? "♥" : "♡"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">
            No products found
          </h2>

          <p className="text-gray-500 mt-2">
            Try searching for another product.
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;