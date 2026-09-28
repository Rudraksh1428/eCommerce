import React from "react";

const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
  upiMethod,
  setUpiMethod,
}) => {
  const handlePaymentChange = (method) => {
    setPaymentMethod(method);

    if (method !== "upi") {
      setUpiMethod("");
    }
  };

  return (
    <div className="p-0">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>

      <div className="space-y-4">
        <label className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-400 transition">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => handlePaymentChange("cod")}
          />

          <span className="font-medium">Cash on Delivery</span>
        </label>

        <div>
          <label className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-400 transition">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => handlePaymentChange("upi")}
            />

            <span className="font-medium">UPI</span>
          </label>

          {paymentMethod === "upi" && (
            <div className="mt-3 ml-8 border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium mb-4">Select UPI App</h3>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="upiMethod"
                    value="gpay"
                    checked={upiMethod === "gpay"}
                    onChange={() => setUpiMethod("gpay")}
                  />

                  <span>Google Pay</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="upiMethod"
                    value="bhim"
                    checked={upiMethod === "bhim"}
                    onChange={() => setUpiMethod("bhim")}
                  />

                  <span>BHIM</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="upiMethod"
                    value="phonepe"
                    checked={upiMethod === "phonepe"}
                    onChange={() => setUpiMethod("phonepe")}
                  />

                  <span>PhonePe</span>
                </label>
              </div>
            </div>
          )}
        </div>

        <label className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-400 transition">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => handlePaymentChange("card")}
          />

          <span className="font-medium">Credit / Debit Card</span>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
