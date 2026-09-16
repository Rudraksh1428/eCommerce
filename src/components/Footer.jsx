import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
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
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>

              <Link to="/products" className="transition hover:text-white">
                Products
              </Link>

              <Link to="/cart" className="transition hover:text-white">
                Cart
              </Link>

              <Link to="/checkout" className="transition hover:text-white">
                Checkout
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Customer Service
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link to="/contact" className="transition hover:text-white">
                Contact Us
              </Link>

              <Link to="/shipping" className="transition hover:text-white">
                Shipping & Delivery
              </Link>

              <Link to="/returns" className="transition hover:text-white">
                Returns & Refunds
              </Link>

              <Link to="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>

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

        <div className="my-12 border-t border-gray-700" />

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Why Shop With Us?</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <Truck size={36} className="mb-4" />

              <h3 className="text-xl font-semibold text-white">
                Fast Delivery
              </h3>

              <p className="mt-2 text-gray-400">
                Get your products delivered quickly.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <ShieldCheck size={36} className="mb-4" />

              <h3 className="text-xl font-semibold text-white">
                Secure Payment
              </h3>

              <p className="mt-2 text-gray-400">
                Your payments are safe and secure.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <RotateCcw size={36} className="mb-4" />

              <h3 className="text-xl font-semibold text-white">Easy Returns</h3>

              <p className="mt-2 text-gray-400">
                Hassle-free returns on eligible products.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 ECommerce Site. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
