import { createContext, useContext, useState } from 'react';
import { getWeatherData } from '../api/weatherApi';

export const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);
  const apiKEY = 'c3da98d687ff4c2e948191327241009';

  const fetchData = async () => {
    const response = await getWeatherData(searchCity, apiKEY);
    setData(response);
  };

  return (
    <WeatherContext.Provider
      value={{ data, searchCity, setSearchCity, fetchData }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
