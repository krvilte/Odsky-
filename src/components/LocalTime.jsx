import { useEffect, useState } from 'react';
import { useWeather } from '../context/weatherContext';
import '../App.css';

function LocalTime() {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  //Weather Context
  const weather = useWeather();
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const date = new Date(weather?.data?.location?.localtime);

  // Current date
  const weekDay = weekDays[date.getDay()];
  const dd = date.getDate();
  const mm = months[date.getMonth()];
  const yy = date.getFullYear();

  useEffect(() => {
    let epochTime = date.getTime();

    const updateClock = () => {
      epochTime += 1000;
      const now = new Date(epochTime);

      setHours(String(now.getHours()).padStart(2, '0'));
      setMinutes(String(now.getMinutes()).padStart(2, '0'));
      setSeconds(String(now.getSeconds()).padStart(2, '0'));
    };

    // set Interval of one second for updateClock
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [weather?.data?.location?.localtime]);

  return (
    <section className='time-window'>
      <span>
        {weather.searchCity.charAt(0).toUpperCase()}
        {weather.searchCity.slice(1)} Local Time Zone
      </span>

      <span className='local-time'>{`${hours}:${minutes}:${seconds}`}</span>
      <span className='current-date'>
        {weekDay}, {dd} {mm} {yy}
      </span>

      <span className='last-update'>
        <b style={{ color: '#bf4b43' }}>Last Updated</b>
        <br />
        {weather?.data?.current?.last_updated}
      </span>
    </section>
  );
}

export default LocalTime;
