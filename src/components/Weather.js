import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Temperature from './Temperature'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    let { city } = useParams();
    const [city1, setCity] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
            getWeatherData();        
      }, [city]);
    
    const getWeatherData = async () => {
        const apiKey = 'f138a38b8516bedbc16e2966e3d59a4a';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setWeatherData(data);
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
                <a href="/"><h1>Weather</h1></a>
                <Temperature temperature={weatherData.main.temp}  />
                <div>
                    <input type="text" 
                        placeholder="Enter city" 
                        value={ city1 } 
                        onKeyDown={handleEnter} 
                        onChange={(e) => setCity(e.target.value)}/>
                    <Link to={`/weather/${city1}`} className="button">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
                {/* <p></p> */}
            </header>
            

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
                
            </div>
            )}
        </div>
    )
}

export default Weather;