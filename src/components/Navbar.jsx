import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { IonIcon } from "@ionic/react"; // Ionicon for menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-5">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        {/* Logo */}
        <div>
        <h1 className="text-2xl font-bold ml-4">Delicious Donuts</h1>
         
        </div>

        {/* Navigation Links */}
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 ${
            isMenuOpen ? "top-[9%] z-50" : "top-[-100%] z-0"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link to="/home" className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-gray-500">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Sign-in Button and Menu Icon */}
        <div className="flex items-center gap-6">
         
          {/* Mobile Menu Icon */}
          <IonIcon
            name={isMenuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer md:hidden"
            onClick={handleMenuToggle}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
