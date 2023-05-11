import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="h-8 w-auto mr-2"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </Link>
        </div>
        {/* Links */}
        <div className="flex justify-center flex-1">
          <div className="flex items-baseline space-x-10">
            <Link to="/" className="text-gray-500 font-medium">
              Home
            </Link>
            <Link to="/" className="text-gray-500 font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-500 font-medium">
              Services
            </Link>
            <Link to="/products" className="text-gray-500 font-medium">
              Products
            </Link>
          </div>
        </div>
        {/* Button */}
        <div className="flex-shrink-0">
          <button
            type="button"
            className="bg-black px-5 py-3 rounded-md text-sm font-medium text-white"
          >
            Call to Action
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
