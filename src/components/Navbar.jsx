import React from "react";
import { ShoppingCart, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition"
          >
            ECommerce Site
          </Link>

          <Link
            to="/products"
            className="text-gray-600 font-medium hover:text-blue-600 transition"
          >
            Products
          </Link>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300
                       outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500 hover:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/wishlist"
            className="flex items-center gap-2 text-gray-600
                       hover:text-red-500 transition"
          >
            <Heart size={20} />
            <span>Wishlist</span>
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 text-gray-600
                       hover:text-blue-600 transition"
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-2 text-gray-600
                       hover:text-blue-600 transition"
          >
            <User size={20} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
