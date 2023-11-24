import React, { useState } from "react";

const Weather = () => {
    const [city, setCity] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longtitude, setLongtitude] = useState('');
    const [weatherData, setWeatherData] = useState(null);

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

    const getData = () => {
        // getLocation();
        getWeatherData();
    }

    return (
        <div className="Weather-container">
            <h1>Weather</h1>
            <input type="text" placeholder="Enter city" value={ city } onChange={(e) => setCity(e.target.value)}/>

            <button onClick={ getData }>Get Weather</button>

            {weatherData && (
            <div>
                <h3>{weatherData.name}</h3>
                <p>25 degrees { latitude }</p>
            </div>
            )}
        </div>
    )
}

export default Weather;