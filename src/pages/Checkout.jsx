import React from "react";
import AddressInfo from "../components/checkout/AddressInfo";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Checkout
        </h1>

        <div className="max-w-3xl">
          <AddressInfo />
        </div>

      </div>
    </div>
  );
};

export default Checkout;