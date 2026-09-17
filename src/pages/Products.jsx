import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/Data";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>

        <p className="mt-2 text-gray-500">
          Showing {products.length} curated essentials
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2.5 border border-gray-300
                     rounded-lg outline-none focus:ring-2
                     focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="px-4 py-2 rounded-full bg-blue-600 text-white">
          All
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Electronics
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Fashion
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Shoes
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Accessories
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Home & Living
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
