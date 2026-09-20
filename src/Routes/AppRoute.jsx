import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../components/ProductDetails";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
          
              <Home />
           
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default AppRoute;
