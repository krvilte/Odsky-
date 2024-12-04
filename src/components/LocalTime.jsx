import { useEffect, useState } from "react";
import { useWeather } from "../context/weatherContext";

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

  // Weather Context
  const weather = useWeather();
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (weather?.data?.location?.localtime) {
      setLoading(false); // Set loading to false when data is available
      const date = new Date(weather.data.location.localtime);

      let epochTime = date.getTime();

      const updateClock = () => {
        epochTime += 1000;
        const now = new Date(epochTime);

        setHours(String(now.getHours()).padStart(2, "0"));
        setMinutes(String(now.getMinutes()).padStart(2, "0"));
        setSeconds(String(now.getSeconds()).padStart(2, "0"));
      };

      // Set interval of one second for updateClock
      const intervalId = setInterval(updateClock, 1000);

      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [weather?.data?.location?.localtime]);

  if (loading) {
    return (
      <div className="flex justify-center items-center" role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  // Current date
  const date = new Date(weather.data.location.localtime);
  const weekDay = weekDays[date.getDay()];
  const dd = date.getDate();
  const mm = months[date.getMonth()];
  const yy = date.getFullYear();

  return (
    <section className="flex flex-col items-center justify-center bg-white rounded p-10 w-full max-w-xs shadow">
      <span className="font-medium text-sm italic">
        {weather.searchCity.charAt(0).toUpperCase()}
        {weather.searchCity.slice(1)} Local Time Zone
      </span>

      <span className="font-semibold text-6xl text-primary-600 p-2 rounded">
        {seconds && `${hours}:${minutes}:${seconds}`}
      </span>

      <span className="text-gray-500 text-sm italic">
        {weekDay}: {dd} {mm} {yy}
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
