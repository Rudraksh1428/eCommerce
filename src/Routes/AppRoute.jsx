import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../components/ProductDetails";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";


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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
};

export default AppRoute;
