import React from "react";

export default function Weather({ data }) {
  const temp = data.main.temp.toFixed(1);
  const windSpeed = data.wind.speed.toFixed(1);

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <h3>{temp}°C</h3>
      <p>{data.weather[0].description}</p>
      <div className="details">
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>💨 Wind: {windSpeed} m/s</p>
      </div>
    </div>
  );
}
