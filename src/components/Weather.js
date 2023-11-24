import React, { useState, useEffect } from "react";

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    // useEffect (() => {
    //     setCity('Auckland');
    // }, []);

    const getWeatherData = async () => {
        const apiKey = 'f138a38b8516bedbc16e2966e3d59a4a';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setWeatherData(data);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
    }

    return (
        <div className="Weather-container">
            <h1>Weather</h1>
            <button onClick={ getWeatherData }>Get Weather</button>

            {weatherData && (
            <div>
                <h3>{weatherData.name}</h3>
                <p>25 degrees</p>
            </div>
            )}
        </div>
    )
}

export default Weather;