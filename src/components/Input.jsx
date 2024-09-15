import React, { useState } from 'react';
import search from '../assets/search.png';
import '../App.css';
import { useWeather } from '../context/weatherContext';

function Input() {
  const weather = useWeather();
  const [city, setCity] = useState(weather.searchCity);

  console.log(weather);

  //Handle Srarched City
  function handleSearch() {
    weather.setSearchCity(city);
  }

  return (
    <div className='search-location'>
      <img
        src={search}
        style={{ width: '20px', height: '20px' }}
        draggable='false'
      />

      <input
        type='text'
        placeholder='Search Location'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className='searchCity' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Input;
