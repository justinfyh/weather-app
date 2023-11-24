import React, { useState, useEffect } from 'react';

const KelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};

const KelvinToFahrenheit = (kelvin) => {
  return (kelvin - 273.15) * (9 / 5) + 32;
};

const TemperatureConverter = ({ temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [convertedTemperature, setConvertedTemperature] = useState(temperature);

  useEffect(() => {
    if (isCelsius) {
      setConvertedTemperature(KelvinToCelsius(temperature).toFixed(2));
    } else {
      setConvertedTemperature(KelvinToFahrenheit(temperature).toFixed(2));
    }
  }, [temperature, isCelsius]);

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  return (
    <div>
      <p>
        {convertedTemperature} {isCelsius ? '°C' : '°F'}
      </p>
      <p>
        {/* Celsius */}
        {/* <input type="checkbox" checked={isCelsius} onChange={toggleTemperatureUnit} /> */}
      </p>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isCelsius}
          onChange={toggleTemperatureUnit}
        />
        <span className="slider round"></span>
        
      </label>
      <p>Celsius/Farenheit</p>
    </div>
  );
};

export default TemperatureConverter;
