import { createContext, useContext, useEffect, useState } from 'react';
import { getWeatherData } from '../api/weatherApi';

// Creating the Context
export const WeatherContext = createContext(null);

// Consuming the Context
export const useWeather = () => {
  return useContext(WeatherContext);
};

// Providing the Context
export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState('Mumbai');
  const [fetchData, setFetchData] = useState();
  const apiKEY = 'c3da98d687ff4c2e948191327241009';

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWeatherData(searchCity, apiKEY);
      setData(response);
    };
    setFetchData(fetchData);
  }, [searchCity]);

  return (
    <WeatherContext.Provider
      value={{ data, searchCity, setSearchCity, fetchData, setFetchData }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
