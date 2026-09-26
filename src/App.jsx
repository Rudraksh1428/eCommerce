import React from "react";
import Navbar from "./components/Navbar";
import AppRoute from "./Routes/AppRoute";
import WishlistProvider from "./context/WishListContext";
import CartProvider from "./context/CartContext";


const App = () => {
  return (
   <WishlistProvider>
      <CartProvider>
        <Navbar />
        <AppRoute />
      </CartProvider>
    </WishlistProvider>
  );
};

export default App;