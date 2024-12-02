import React, { useState } from "react";
import search from "../assets/search.png";
import { useWeather } from "../context/weatherContext";
import "../App.css";

function Input() {
  const weather = useWeather();
  const [city, setCity] = useState(weather.searchCity);

  //Handle Srarched City
  function handleSearch(e) {
    e.preventDefault();
    weather.setSearchCity(city);
  }

  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <form onSubmit={handleSearch}>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;
