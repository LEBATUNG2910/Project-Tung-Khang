import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import 'Link'
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import About from "./pages/About"; // Assuming you have an About page
import Contact from "./pages/Contact"; // Assuming you have a Contact page
import Navbar from "./components/Navbar"; // Import the Navbar

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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
