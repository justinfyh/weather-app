import React from 'react';
import Temperature from './Temperature';

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="data-container">
      <div className='main-section'>
        <h3>{weatherData.name}</h3>
        <div>
        <p><Temperature kelvin={weatherData.main.temp}/></p>
        <p className='looks-like'>{weatherData.weather[0].main}</p>
        </div>
        
      </div>

      <div className='sub-section'>
        <ul>
          <li><p>Feels like:</p> <p><Temperature kelvin={weatherData.main.feels_like}/></p></li>
          <li><p>Pressure:</p> <p>{weatherData.main.pressure} Pa</p></li>
          <li><p>Humidity:</p> <p>{weatherData.main.humidity}%</p></li>
          <li><p>Visibility:</p> <p>{weatherData.visibility} km</p></li>
          <li><p>Wind:</p> <p>{weatherData.wind.speed} km/h</p></li>
          <li><p>Direction:</p> <p>{weatherData.wind.deg}°</p></li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherDetails;
