import React, { useState } from "react";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/icon/logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary-600 text-white shadow-md w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold w-16">
          <Link to="/">
            <Logo color="#fff" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-2xl focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items */}
        <ul
          className={`fixed sm:static top-0 left-0 w-full sm:w-auto bg-primary-600 sm:bg-transparent flex-col sm:flex-row sm:flex sm:items-center transition-all duration-300 ease-in-out z-40 ${
            isOpen ? "flex h-screen" : "hidden sm:flex"
          }`}
        >
          <li className="sm:py-0 rounded-md hover:bg-primary-600 transition-all duration-200 ease-in-out">
            <Link
              to="/login"
              className="flex items-center text-white px-4 py-2 hover:bg-primary-800 rounded"
              onClick={handleLinkClick}
            >
              <FaSignOutAlt className="mr-2" /> Login
            </Link>
          </li>
          <li className="sm:py-0 rounded-md hover:bg-primary-600 transition-all duration-200 ease-in-out">
            <Link
              to="/signup"
              className="block w-full sm:w-auto text-start text-white px-4 py-2 hover:bg-primary-800 rounded"
              onClick={handleLinkClick}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
