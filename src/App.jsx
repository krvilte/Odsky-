import React from "react";
import SearchCity from "./components/SearchCity";
import Forcast from "./components/Forcast";
import LocalTime from "./components/LocalTime";
import Logo from "./assets/icon/logo";
import { WeatherProvider } from "./context/weatherContext";
function App() {
  return (
    <WeatherProvider>
      <section className="bg-primary-300 relative min-h-screen min-w-screen ">
        <div className="m-auto py-6 w-[100px]">
          <Logo color={"#fff"} />
        </div>

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
