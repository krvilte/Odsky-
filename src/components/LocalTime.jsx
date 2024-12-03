import { useEffect, useState } from "react";
import { useWeather } from "../context/weatherContext";
import "../App.css";

function LocalTime() {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //Weather Context
  const weather = useWeather();
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
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

      setHours(String(now.getHours()).padStart(2, "0"));
      setMinutes(String(now.getMinutes()).padStart(2, "0"));
      setSeconds(String(now.getSeconds()).padStart(2, "0"));
    };

    // set Interval of one second for updateClock
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [weather?.data?.location?.localtime]);

  return (
    <section className="flex flex-col items-center justify-center bg-white rounded p-10 w-full max-w-xs shadow">
      <span className="font-medium text-sm italic">
        {weather.searchCity.charAt(0).toUpperCase()}
        {weather.searchCity.slice(1)} Local Time Zone
      </span>

      <span className="font-semibold text-6xl text-primary-600 p-2 rounded">
        {seconds && `${hours}:${minutes}:${seconds}`}
      </span>

      <span className="font- text-gray-500 text-sm italic">
        <span style={{ "--value": `${weekDay}` }}>{weekDay}</span>:
        <span style={{ "--value": `${dd}` }}> {dd} </span>:
        <span style={{ "--value": `${mm}` }}> {mm} </span>:
        <span style={{ "--value": `${yy}` }}> {yy} </span>
      </span>

      <span className="flex flex-col items-center font-sans">
        <span className="mt-4 font-semibold text-primary-600">
          Last Updated
        </span>
        <span className="text-sm text-gray-500 italic">
          {weather?.data?.current?.last_updated}
        </span>
      </span>
    </section>
  );
}

export default LocalTime;
