import React, { useState } from "react";

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  const [upiMethod, setUpiMethod] = useState("");

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>

      <div className="space-y-4">
        <label className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="font-medium">Cash on Delivery</span>
        </label>

        <div>
          <label className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="font-medium">UPI</span>
          </label>

          {paymentMethod === "upi" && (
            <div className="mt-3 ml-8 border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium mb-3">Select UPI App</h3>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="upiMethod"
                    value="gpay"
                    checked={upiMethod === "gpay"}
                    onChange={(e) => setUpiMethod(e.target.value)}
                  />
                  <span>Google Pay</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="upiMethod"
                    value="bhim"
                    checked={upiMethod === "bhim"}
                    onChange={(e) => setUpiMethod(e.target.value)}
                  />
                  <span>BHIM</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="upiMethod"
                    value="phonepe"
                    checked={upiMethod === "phonepe"}
                    onChange={(e) => setUpiMethod(e.target.value)}
                  />
                  <span>PhonePe</span>
                </label>
              </div>
            </div>
          )}
        </div>

        <label className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="font-medium">Credit / Debit Card</span>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
