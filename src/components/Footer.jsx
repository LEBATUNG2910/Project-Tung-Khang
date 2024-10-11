import React from "react";

const Footer = () => {
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
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
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
  );
};

export default Footer;
