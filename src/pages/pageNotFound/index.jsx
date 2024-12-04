import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook for navigation

const NotFound = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGoHome = () => {
    navigate("/"); // Navigate to home when button is clicked
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-black mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoHome} // Call the function on button click
        className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition duration-300"
      >
        Go back to Home
      </button>
    </div>
  );
};

export default NotFound;
