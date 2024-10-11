import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const CartIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
);

const Navbar = () => {
  return (
    <nav className="bg-yellow-100 text-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Delicious Donuts</h1>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:underline">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </li>
          {/* Cart Icon */}
          <li>
            <Link to="/cart" className="relative">
              <CartIcon />
              {/* <span className="absolute top-0 right-0  text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                3
              </span> Example for cart items count */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
