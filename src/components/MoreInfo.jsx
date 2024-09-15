import React from 'react';
import { useWeather } from '../context/weatherContext';

function MoreInfo() {
  const weather = useWeather();

  return (
    <div className='more-info'>
      <div className='info'>
        <span>
          <b>Temprature</b>
        </span>
        <span style={{ textAlign: 'end' }}>
          {weather?.data?.current?.temp_c}°c{' '}
          <b style={{ color: '#bf4b43' }}>
            {weather?.data?.current?.condition.text}
          </b>
        </span>
      </div>

      <div className='info'>
        <span>
          <b>Humidity</b>
        </span>
        <span style={{ textAlign: 'end' }}>
          {weather?.data?.current?.humidity}
        </span>
      </div>

      <div className='info'>
        <span>
          <b>Air Pressure</b>
        </span>
        <span style={{ textAlign: 'end' }}>
          {weather?.data?.current?.pressure_in}
        </span>
      </div>

      <div className='info'>
        <span>
          <b>cloud</b>
        </span>
        <span style={{ textAlign: 'end' }}>
          {weather?.data?.current?.cloud}
        </span>
      </div>
    </div>
  );
}

export default MoreInfo;
