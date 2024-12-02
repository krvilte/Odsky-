import React from "react";
import Card from "./components/Card";
import LocalTime from "./components/LocalTime";
import "./App.css";
import { WeatherProvider } from "./context/weatherContext";
function App() {
  return (
    <WeatherProvider>
      {/* <div className='weatherApp'> */}
      <Card />
      <LocalTime />
      {/* </div> */}
    </WeatherProvider>
  );
}

export default App;
