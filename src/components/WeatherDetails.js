import React from 'react';
import Temperature from './Temperature';

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="data-container">
      <h3>{weatherData.name}</h3>
      <p>Temperature: <Temperature kelvin={weatherData.main.temp}/></p>
      <p>Feels like: <Temperature kelvin={weatherData.main.feels_like}/></p>
      <p>{weatherData.weather[0].main}</p>
      <p>Pressure: {weatherData.main.pressure} Pa</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Visibility: {weatherData.visibility} km</p>
      <p>Wind: {weatherData.wind.speed} km/h</p>
      <p>Direction: {weatherData.wind.deg}°</p>
    </div>
  );
};

export default WeatherDetails;
