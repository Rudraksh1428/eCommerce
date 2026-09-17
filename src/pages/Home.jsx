import React, { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../data/Data";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const product = products[current];

  const nextProduct = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="w-full bg-gray-100 px-4 py-10">
      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 p-5 text-white shadow-lg">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-bold">
            <Zap size={14} className="fill-cyan-300 text-cyan-300" />
            SUMMER TECH & LIFESTYLE
          </div>

          <div className="rounded-md bg-green-700 px-3 py-2 text-xs font-bold leading-tight">
            UP TO 45%
            <br />
            OFF
          </div>
        </div>

        <div className="mx-auto mt-5 grid max-w-5xl grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-2xl font-bold leading-tight md:text-3xl">
              Elevate Your Daily
              <br />
              Rituals
            </h1>

            <p className="mt-2 max-w-xs text-sm text-blue-100">
              Next-gen audio, curated apparel & smart desk essentials.
            </p>

            <Link
              to="/products"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-gray-100"
            >
              Shop Now
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            onClick={nextProduct}
            className="flex h-60 w-110 cursor-pointer items-center justify-center"
          >
            <img
              src={product.img}
              alt={product.description}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          {products.slice(0, 3).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
