import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Menu from "./pages/Menu"; // Assuming you have a Menu page
import About from "./pages/About"; // Assuming you have an About page
import Contact from "./pages/Contact"; // Assuming you have a Contact page
import Navbar from "./components/Navbar"; // Import the Navbar

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="text-white">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white">
              Login
            </Link>
          </li>
        </ul>
      </nav>
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
