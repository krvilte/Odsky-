import React from "react";
import { useWeather } from "../context/weatherContext";

function Forcast() {
  const weather = useWeather();
  const weatherIcon = weather?.data?.current?.condition?.icon;

  return (
    <>
      <div className="max-w-screen mb-10 flex gap-x-4 items-center justify-center">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs shadow">
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-xl text-primary-600">
              {weather?.data?.location?.name}
            </span>
            <span className="text-sm text-gray-500 italic">
              {weather?.data?.location?.country},{" "}
              {weather?.data?.location?.region}
            </span>
          </div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img
              src={weatherIcon}
              alt="icon"
              draggable="false"
              className="w-40"
            />
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl text-primary-600">
              {Math.floor(weather?.data?.current?.temp_c)}
            </div>
            <div className="flex flex-col font-medium text-primary-600 items-center ml-6">
              <span>{weather?.data?.current?.condition?.text}</span>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up" />
                </span>
                <span className="text-sm font-light text-gray-500 italic">
                  {Math.floor(weather?.data?.current?.temp_c)}°C
                </span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down" />
                </span>
                <span className="text-sm font-light text-gray-500 italic">
                  {" "}
                  {Math.floor(weather?.data?.current?.temp_c)}°F
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm text-primary-600">Wind</div>
              <div className="text-sm text-gray-500 italic">
                {Math.floor(weather?.data?.current?.wind_kph)}/h
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm text-primary-600">
                Humidity
              </div>
              <div className="text-sm text-gray-500 italic">
                {Math.floor(weather?.data?.current?.humidity)}%
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm text-primary-600">
                Visibility
              </div>
              <div className="text-sm text-gray-500 italic">
                {Math.floor(weather?.data?.current?.vis_km)}km
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forcast;
