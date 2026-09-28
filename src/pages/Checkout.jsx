import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const AddressInfo = () => {
  const { profile } = useUser();

  const [address, setAddress] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    address: profile.address,
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Delivery Address</h2>

      <input
        type="text"
        name="name"
        value={address.name}
        onChange={handleChange}
        placeholder="Full Name"
      />

      <input
        type="email"
        name="email"
        value={address.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="text"
        name="phone"
        value={address.phone}
        onChange={handleChange}
        placeholder="Phone"
      />

      <textarea
        name="address"
        value={address.address}
        onChange={handleChange}
        placeholder="Address"
      />

      <input
        type="text"
        name="city"
        value={address.city}
        onChange={handleChange}
        placeholder="City"
      />

      <input
        type="text"
        name="state"
        value={address.state}
        onChange={handleChange}
        placeholder="State"
      />

      <input
        type="text"
        name="pincode"
        value={address.pincode}
        onChange={handleChange}
        placeholder="Pincode"
      />
    </div>
  );
};

export default AddressInfo;