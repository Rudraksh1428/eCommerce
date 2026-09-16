import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </>
  );
};

export default AppRoute;
