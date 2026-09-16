import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./Routes/AppRoute";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
