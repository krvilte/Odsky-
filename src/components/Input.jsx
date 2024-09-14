import React, { useState } from 'react';
import search from '../assets/search.png';
import '../App.css';
import { useWeather } from '../context/weatherContext';

function Input() {
  return (
    <div className='search-location'>
      <img
        src={search}
        style={{ width: '20px', height: '20px' }}
        draggable='false'
      />

      <input type='text' placeholder='Search Location' />

      <button className='searchCity'>search</button>
    </div>
  );
}

export default Input;
