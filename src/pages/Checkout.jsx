import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import AddressInfo from "../components/checkout/AddressInfo";

const Checkout = () => {
  const { profile } = useUser();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    address: profile.address,
    city: "",
    state: "",
    pincode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="max-w-3xl">

          <AddressInfo
            address={address}
            setAddress={setAddress}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold mt-6 hover:bg-gray-800 transition"
          >
            Continue to Payment
          </button>

        </form>

      </div>
    </div>
  );
};

export default Checkout;