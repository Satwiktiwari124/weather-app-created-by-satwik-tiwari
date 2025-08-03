import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

const API_KEY = "c7b6fccf5bbd68903531c6bfc9160683";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
        setError("");
      } else {
        setWeather(null);
        setError("City not found!");
      }
    } catch (err) {
      setWeather(null);
      setError("Failed to fetch weather data.");
    }
  };

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>
      <Search onSearch={getWeather} />

      {error && <p className="error">{error}</p>}

      {weather && <Weather data={weather} />}
    </div>
  );
}

export default App;
