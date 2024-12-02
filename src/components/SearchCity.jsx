// import React, { useState } from "react";
import { useWeather } from "../context/weatherContext";
import "../App.css";

function SearchCity() {
  const weather = useWeather();
  // const [city, setCity] = useState(weather.searchCity);

  //Handle Srarched City
  // function handleSearch(e) {
  //   e.preventDefault();
  //   weather.setSearchCity(city);
  // }

  return (
    <div>
      <h1 className="bg-green-500">Hello World</h1>

      <div className="bg-gray-200">
        <div className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
              placeholder="Search anything..."
            />
            <div className="absolute top-4 right-3">
              <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-md mx-auto">
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
    </div> */}
    </div>
  );
}

export default SearchCity;
