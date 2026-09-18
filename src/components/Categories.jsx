import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
  },
  {
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=500",
  },
];

const Categories = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-10">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-2xl md:text-3xl font-bold">
            Explore Various Categories
          </p>

          <p className="text-gray-500 text-sm mt-1">
            Find what you are looking for
          </p>
        </div>

        <Link to="/products" className="text-sm font-semibold hover:underline">
          See all
        </Link>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {categories.map((category) => (
          <Link
            to={`/products?category=${category.name}`}
            key={category.name}
            className="group text-center"
          >
            <div className="w-full h-44 overflow-hidden rounded-xl bg-gray-100">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <p className="mt-3 text-lg font-semibold">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
