import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Link'
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"; // Import the Navbar
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* If you have a custom Navbar, keep this */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
