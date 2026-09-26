import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalItems = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );

  return (
    <div className="px-6 md:px-12 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-1">
            {totalItems}{" "}
            {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">

            <div className="text-6xl mb-5 text-gray-300">
              🛒
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>

            <Link
              to="/products"
              className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Browse Products
            </Link>

          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-5">

              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row gap-5 p-5 bg-white border border-gray-200 rounded-xl"
                >

                  <Link to={`/products/${product.id}`}>
                    <img
                      src={product.img}
                      alt={product.description}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg bg-gray-100"
                    />
                  </Link>

                  <div className="flex-1">

                    <p className="text-sm text-gray-500">
                      {product.category}
                    </p>

                    <h2 className="text-lg font-semibold mt-1">
                      {product.description}
                    </h2>

                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-yellow-500">
                        ★
                      </span>

                      <span className="text-sm">
                        {product.rating}
                      </span>
                    </div>

                    <p className="text-lg font-bold mt-2">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>

                    <div className="flex items-center gap-4 mt-4">

                      <div className="flex items-center border border-gray-300 rounded-lg">

                        <button
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                          className="w-9 h-9 text-lg hover:bg-gray-100 rounded-l-lg"
                        >
                          −
                        </button>

                        <span className="w-10 text-center font-semibold">
                          {product.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                          disabled={
                            product.quantity >= product.stock
                          }
                          className="w-9 h-9 text-lg hover:bg-gray-100 rounded-r-lg disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(product.id)
                        }
                        className="text-sm text-red-500 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="font-bold text-lg">
                      ₹
                      {(
                        product.price *
                        product.quantity
                      ).toLocaleString("en-IN")}
                    </p>

                  </div>

                </div>
              ))}

            </div>

            <div className="h-fit border border-gray-200 rounded-xl p-6">

              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between mt-6 text-gray-600">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between mt-3 text-gray-600">
                <span>Products</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between mt-3 text-gray-600">
                <span>Subtotal</span>
                <span>
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between mt-3 text-gray-600">
                <span>Delivery</span>

                <span className="text-green-600">
                  Free
                </span>
              </div>

              <div className="border-t border-gray-200 my-5"></div>

              <div className="flex justify-between text-lg font-bold">

                <span>Total</span>

                <span>
                  ₹{total.toLocaleString("en-IN")}
                </span>

              </div>

              <button className="w-full mt-6 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block text-center mt-4 text-sm text-gray-500 hover:text-black"
              >
                Continue Shopping
              </Link>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;