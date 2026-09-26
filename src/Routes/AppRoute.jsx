import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../components/ProductDetails";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";

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
        <Route path="/cart" element={<Cart/>} />
        
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default AppRoute;
