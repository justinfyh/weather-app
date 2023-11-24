import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Temperature from './Temperature'
import ToggleSwitch from "./ToggleSwitch";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    let { city } = useParams();
    const [city1, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        getWeatherData();   
      }, [city]);
    
    const getWeatherData = async () => {
        const apiKey = 'f138a38b8516bedbc16e2966e3d59a4a';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        setWeatherData(null);
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setWeatherData(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error getting weather data:', error);
        }
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            navigate(`/weather/${city1}`);
        }
    };

    return (
        <div className="Weather-container">
            <header className="Weather-header">
                <div className="Header-container">
                    <a href="/"><h1>Weather</h1></a>
                    <ToggleSwitch />
                </div>
                <div className="Input-container">
                    <input type="text" 
                        placeholder="Enter city" 
                        value={ city1 } 
                        onKeyDown={handleEnter} 
                        onChange={(e) => setCity(e.target.value)}/>
                    <Link to={`/weather/${city1}`} className="button">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </header>

            {isLoading && <p>Loading...</p>}

            {weatherData && (
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
            )}
        </div>
    )
}

export default Weather;