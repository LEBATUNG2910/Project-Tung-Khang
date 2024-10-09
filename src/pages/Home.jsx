import React from "react";
import donut1 from "../images/donut1.jpg";
import donut2 from "../images/donut2.jpg";
import donut3 from "../images/donut3.jpg";
import donut4 from "../images/donut4.jpg";
import backgroundImage from "../images/bg.jpg";
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-yellow-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const Home = () => {
  const donuts = [
    {
      name: "Chocolate Glazed",
      price: "$2.00",
      img: donut1,
    },
    {
      name: "Strawberry Sprinkles",
      price: "$2.50",
      img: donut2,
    },
    {
      name: "Classic Vanilla Sprinkles",
      price: "$1.75",
      img: donut3,
    },
    {
      name: "Bavarian Cream Donuts",
      price: "$2.25",
      img: donut4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="relative flex justify-center items-center flex-col text-white h-full">
            <h1 className="text-5xl font-bold">Welcome to Delicious Donuts!</h1>
            <p className="mt-4 text-xl">Freshly baked and delivered daily!</p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Product */}
      <div className="bg-yellow-100 p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-800">Today's Special</h2>
        <p className="text-xl mt-2">Buy 2 Chocolate Glazed, Get 1 Free!</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Claim Offer
        </button>
      </div>

      {/* Best Sellers Section */}
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Best Sellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donuts.map((donut, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
            >
              <img
                src={donut.img}
                alt={donut.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{donut.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{donut.price}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-200 p-12 mt-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Delicious Donuts started as a small family bakery in 2000. Today,
            we're proud to serve the best donuts in town, using only the finest
            ingredients and time-honored recipes. Our passion for quality and
            creativity keeps our customers coming back for more!
          </p>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="container mx-auto mt-16 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The best donuts I've ever tasted! Fresh, fluffy, and bursting
                with flavor."
              </p>
              <p className="font-semibold">- Happy Customer {index + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to our newsletter for exclusive offers and donut news!
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-full w-64 text-gray-800"
            />
            <button className="bg-yellow-400 text-blue-800 font-bold py-2 px-4 rounded-r-full hover:bg-yellow-300 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Delicious Donuts</h3>
            <p>123 Donut Street, Sweetville, CA 90210</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@deliciousdonuts.com</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="Menu" className="hover:text-blue-400">
                  Menu
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-blue-400">
                <EmailIcon />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Delicious Donuts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
