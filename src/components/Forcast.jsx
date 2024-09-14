import React from 'react';
import cloud from '../assets/cloud.png';

function Forcast() {
  return (
    <div className='forcast'>
      <div className='condition'>
        <img
          src={cloud}
          alt='icon'
          className='weather-icon'
          draggable='false'
        />
      </div>

      <div className='weather-info'>
        <h2 className='temprature'>23°c</h2>
        <h3 className='name'>London</h3>
        <span className='country'>United Kingdom</span>

        <div className='weather-title'>
          <h3 className='weather-text'>Haze</h3>
        </div>
      </div>
    </div>
  );
}

export default Forcast;
