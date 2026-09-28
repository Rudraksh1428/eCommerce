import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentMethod from "../components/checkout/PaymentMethod";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiMethod, setUpiMethod] = useState("");

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    if (paymentMethod === "upi" && !upiMethod) {
      alert("Please select a UPI app");
      return;
    }

    navigate("/order-summary");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">
            Checkout / Payment
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choose Payment Method
          </h1>

          <p className="text-gray-500 mt-2">
            Select your preferred payment option to complete your order.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-8">

          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            upiMethod={upiMethod}
            setUpiMethod={setUpiMethod}
          />

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={!paymentMethod}
              className={`w-full py-3.5 rounded-xl font-semibold text-white transition ${
                paymentMethod
                  ? "bg-black hover:bg-gray-800 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Place Order
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;