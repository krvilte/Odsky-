import React from "react";
import SearchCity from "./components/SearchCity";
import Forcast from "./components/Forcast";
import LocalTime from "./components/LocalTime";
import { WeatherProvider } from "./context/weatherContext";
function App() {
  return (
    <WeatherProvider>
      <section className="relative min-h-screen min-w-screen ">
        <h1 className="text-center text-3xl text-white font-semibold max-w-lg mx-auto my-8">
          Odsky-
        </h1>

        <SearchCity />
        <Forcast />
        <div className="flex  justify-center lg:absolute lg:top-10 lg:right-10">
          <LocalTime />
        </div>
      </section>
    </WeatherProvider>
  );
}

export default App;
