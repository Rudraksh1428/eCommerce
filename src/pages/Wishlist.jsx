import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishListContext";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="px-6 md:px-12 lg:px-16 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Wishlist</h1>

        <p className="text-gray-500 mt-1">{wishlist.length} items saved</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">♡</div>

          <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>

          <p className="text-gray-500 mt-2">
            Add products you like to your wishlist.
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="relative">
              <Link to={`/products/${product.id}`}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="h-52 bg-gray-100 overflow-hidden rounded-xl">
                    <img
                      src={product.img}
                      alt={product.description}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-gray-500">{product.category}</p>

                    <h3 className="font-semibold mt-1">
                      {product.description}
                    </h3>

                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-yellow-500">★</span>

                      <span className="text-sm">{product.rating}</span>
                    </div>

                    <p className="font-bold text-lg mt-1">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </Link>

              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
              >
                <span className="text-xl text-red-500">♥</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
