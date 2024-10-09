import React from "react";
// import donut1 from "../images/donut1.jpg";
// import donut2 from "../images/donut2.jpg";
// import donut3 from "../images/donut3.jpg";
// import donut4 from "../images/donut4.jpg";
import backgroundImage from "../images/bg.jpg";
const Home = () => {
  const donuts = [
    {
      name: "Chocolate Glazed",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Strawberry Sprinkles",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Classic Vanilla",
      price: "$1.75",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Maple Bar",
      price: "$2.25",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for better text visibility */}
        <div className="relative flex justify-center items-center flex-col text-white">
          <h1 className="text-4xl font-bold">Welcome to Delicious Donuts!</h1>
          <p className="mt-2 text-lg">Freshly baked and delivered daily!</p>
        </div>
      </div>

      {/* Donut Showcase */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {donuts.map((donut, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <img
              src={donut.img}
              alt={donut.name}
              className="w-32 h-32 object-cover rounded-full mx-auto" // Use rounded-full for circular shape
            />
            <h2 className="text-xl font-semibold mt-2">{donut.name}</h2>
            <p className="text-lg text-gray-500">{donut.price}</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
