import React from "react";
import { ShoppingCart, Heart, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-8 py-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h2 className="text-2xl font-bold text-gray-900">ECommerce Site</h2>

          <span className="m-0 text-gray-600 font-medium cursor-pointer  hover:text-black transition">
            Products
          </span>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                       outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition hover:border-blue-500 "
          />
        </div>

        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-2 text-gray-600 
                          cursor-pointer hover:text-red-500 transition"
          >
            <Heart size={20} />
            <span>Wishlist</span>
          </div>

          <div
            className="flex items-center gap-2 text-gray-600 
                          cursor-pointer hover:text-blue-600 transition"
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
          </div>

          <div
            className="flex items-center gap-2 text-gray-600 
                          cursor-pointer hover:text-blue-600 transition"
          >
            <User size={20} />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
