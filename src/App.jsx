import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./Routes/AppRoute";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
     
    </div>
  );
};

export default App;
