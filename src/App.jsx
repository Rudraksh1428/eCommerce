import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./Routes/AppRoute";
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
