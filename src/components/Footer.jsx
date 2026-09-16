import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">
              ECommerce Site
            </h2>
            <p className="text-sm leading-6 text-gray-400">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/products" className="hover:text-white transition">Products</Link>
              <Link to="/cart" className="hover:text-white transition">Cart</Link>
              <Link to="/checkout" className="hover:text-white transition">Checkout</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Customer Service
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
              <Link to="/shipping" className="hover:text-white transition">Shipping & Delivery</Link>
              <Link to="/returns" className="hover:text-white transition">Returns & Refunds</Link>
              <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@ecommerce.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>India</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 ECommerce Site. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;