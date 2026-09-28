import React from "react";
import Navbar from "./components/Navbar";
import AppRoute from "./Routes/AppRoute";
import WishlistProvider from "./context/WishListContext";
import CartProvider from "./context/CartContext";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
   <UserProvider>
  <WishlistProvider>
    <CartProvider>
      <Navbar />
      <AppRoute />
      <Footer />
    </CartProvider>
  </WishlistProvider>
</UserProvider>
  );
};

export default App;