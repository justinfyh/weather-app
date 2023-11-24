import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { grid } from "ldrs";

import WeatherDetails from "./WeatherDetails";
import ToggleSwitch from "./ToggleSwitch";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [city1, setCity] = useState('');
    let { city } = useParams();
    let navigate = useNavigate();

    grid.register();

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
    };

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

            {isLoading && <div><l-grid size="115" speed="1.5" color="white"></l-grid></div> }

            {weatherData && <WeatherDetails weatherData={weatherData} /> }
        </div>
    );
};

export default Weather;