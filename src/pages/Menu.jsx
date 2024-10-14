import React from "react";
import donut1 from "../images/donut1.jpg";
import donut2 from "../images/donut2.jpg";
import donut3 from "../images/donut3.jpg";
import donut4 from "../images/donut4.jpg";
import donut5 from "../images/donut5.jpg";
import donut6 from "../images/donut6.jpg";
import donut7 from "../images/donut7.jpg";
import donut8 from "../images/donut8.jpg";
import Menubutton from "../components/Menubutton";
import Add from "../components/Add";

const Menu = () => {
  const donuts = [
    {
      id: 1, // Added an ID for each donut
      name: "Chocolate Glazed",
      price: "$2.00",
      inCart : false,
      count : 1,
      img: donut1,
    },
    {
      id: 2,
      name: "Strawberry Sprinkles",
      price: "$2.50",
      inCart : false,
      count : 1,
      img: donut2,
    },
    {
      id: 3,
      name: "Classic Vanilla Sprinkles",
      price: "$1.75",
      inCart : false,
      count : 1,
      img: donut3,
    },
    {
      id: 4,
      name: "Bavarian Cream Donuts",
      price: "$2.25",
      inCart : false,
      count : 1,
      img: donut4,
    },
    {
      id: 5,
      name: "Chocolate Long John with Sprinkles",
      price: "$2.25",
      inCart : false,
      count : 1,
      img: donut5,
    },
    {
      id: 6,
      name: "Chocolate Iced Peanut Long John",
      price: "$2.25",
      inCart : false,
      count : 1,
      img: donut6,
    },
    {
      id: 7,
      name: "Creme Filled Long John",
      price: "$2.25",
      inCart : false,
      count : 1,
      img: donut7,
    },
    {
      id: 8,
      name: "Maple Bacon Bar",
      price: "$2.25",
      inCart : false,
      count : 1,
      img: donut8,
    },
  ];

  return (
    <div>
      {/* Menu Button */}
      <div className="text-4xl font-bold flex justify-center items-center mt-10">
        <Menubutton />
      </div>

      {/* Best Sellers Section */}
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Best Sellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donuts.map((donut) => (
            <div
              key={donut.id} // Use id as the key
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
            >
              <img
                src={donut.img}
                alt={donut.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-sm font-semibold">{donut.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{donut.price}</p>
              {/* Add to Cart Button */}
              <Add />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
