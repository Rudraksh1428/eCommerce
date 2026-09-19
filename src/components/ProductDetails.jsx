import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/Data";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Product not found
          </h1>

          <Link
            to="/products"
            className="inline-block mt-4 px-5 py-2 bg-black text-white rounded-lg"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/products"
          className="inline-block mb-8 text-sm font-medium text-gray-500 hover:text-black"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src={product.img}
              alt={product.description}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              {product.category}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {product.description}
            </h1>

            <div className="flex items-center gap-2 mt-5">
              <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-lg">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="font-semibold text-gray-800">
                  {product.rating}
                </span>
              </div>

              <span className="text-sm text-gray-500">Customer Rating</span>
            </div>

            <div className="mt-6">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
            </div>

            <p className="text-gray-500 leading-7 mt-6">
              This is a high-quality {product.description.toLowerCase()}.
              Explore the product details and add it to your cart to continue
              shopping.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="flex-1 bg-black text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-gray-800 transition">
                Add to Cart
              </button>

              <button className="px-6 py-3.5 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition">
                ♡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
