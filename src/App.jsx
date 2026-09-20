import React from "react";
import Navbar from "./components/Navbar";
import AppRoute from "./Routes/AppRoute";
import WishlistProvider from "./context/WishListContext";

const App = () => {
  return (
    <WishlistProvider>
      <Navbar />
      <AppRoute />
    </WishlistProvider>
  );
};

export default App;