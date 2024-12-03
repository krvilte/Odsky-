import React, { useState } from "react";
import { FaBars, FaTimes, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../assets/icon/logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-500 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold w-14">
          <Link to={"/"}>
            <Logo color={"#fff"} />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items */}
        <ul
          className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-primary-500 sm:bg-transparent flex flex-col sm:flex-row sm:items-center transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
          }`}
        >
          <li className="px-4 py-2 sm:py-0 hover:bg-primary-600 sm:hover:bg-transparent">
            <a href="/settings" className="flex items-center">
              <FaCog className="mr-2" /> Settings
            </a>
          </li>
          <li className="px-4 py-2 sm:py-0 hover:bg-primary-600 sm:hover:bg-transparent">
            <a href="/logout" className="flex items-center">
              <FaSignOutAlt className="mr-2" /> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
