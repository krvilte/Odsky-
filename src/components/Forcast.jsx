import React from 'react';
import cloud from '../assets/cloud.png';
import { useWeather } from '../context/weatherContext';

function Forcast() {
  const weather = useWeather();
  const weatherIcon = weather?.data?.current?.condition?.icon;

  return (
    <div className='forcast'>
      <div className='condition'>
        <img
          src={weatherIcon}
          alt='icon'
          className='weather-icon'
          draggable='false'
        />
      </div>

      <div className='weather-info'>
        <h2 className='temprature'>
          {Math.floor(weather?.data?.current?.temp_c)}°c
        </h2>
        <h3 className='name'>{weather?.data?.location?.name}</h3>
        <span className='country'>
          {weather?.data?.location?.country}, {weather?.data?.location?.region}
        </span>

        <div className='weather-title'>
          <h3 className='weather-text'>
            {weather?.data?.current?.condition?.text}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Forcast;
