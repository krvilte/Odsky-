import React, { useState } from "react";
import {
  FaBars,
  FaCog,
  FaTimes,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/icon/logo";
import { useAuth } from "../context/authContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("Log out");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return user ? (
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
              to="/settings"
              className="flex items-center text-white px-4 py-2 hover:bg-primary-800 rounded"
            >
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>
          <li className="sm:py-0 rounded-md hover:bg-primary-600 transition-all duration-200 ease-in-out">
            <Link
              to="/"
              className="flex items-center text-white px-4 py-2 hover:bg-primary-800 rounded"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
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
              className=" text-white px-4 py-2 hover:bg-primary-800 rounded"
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </li>
          <li className="sm:py-0 rounded-md hover:bg-primary-600 transition-all duration-200 ease-in-out">
            <Link
              to="/signup"
              className="block w-full sm:w-auto text-start text-white px-4 py-2 hover:bg-primary-800 rounded"
              onClick={handleLinkClick}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
