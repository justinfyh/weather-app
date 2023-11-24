import React, { useState, useEffect } from "react";

import Temperature from './Temperature'
import { useParams } from "react-router-dom";


const Weather = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    let { city } = useParams();
    // const { cityname } = useParams();
    // const [search, setSearch] = useSearchParams()
    // setSearch(location.search)
    // const getLocation = async () => {
    //     const apiKey = 'f138a38b8516bedbc16e2966e3d59a4a';
    //     const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    //     try {
    //         const response = await fetch(apiUrl);
    //         const data = await response.json();
    //         setLatitude(data.lat);
    //         setLongtitude(data.lon);
    //     } catch (error) {
    //         console.error('Error getting city:', error);
    //     }
    // }

    useEffect(() => {
            getWeatherData();        
      }, [city]);

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
          getWeatherData();
        }
      };
    

    const getWeatherData = async () => {
        const apiKey = 'f138a38b8516bedbc16e2966e3d59a4a';
        // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longtitude }&appid=${apiKey}`;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error getting weather data:', error);
        }
    }

    return (
        <div className="Weather-container">
            <a href="/"><h1>Weather</h1></a>

            {weatherData && (
            <div>
                <h3>{weatherData.name}</h3>
                 <p>Temperature: {weatherData.main.temp} K</p>
                <p>Looks: {weatherData.weather[0].main}</p>
                <p>Feels like: {weatherData.main.feels_like} K</p>
                <p>Pressure: {weatherData.main.pressure} Pa</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Visibility: {weatherData.visibility} km</p>
                <p>Wind: {weatherData.wind.speed} km/h</p>
                <p>Direction: {weatherData.wind.deg}°</p>
                <Temperature temperature={weatherData.main.temp}  />
            </div>
            )}
        </div>
    )
}

export default Weather;