// TemperatureDisplay.js
import React, { useEffect, useState } from 'react';
import { useTemperatureContext } from './TemperatureContext';

const KelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};

const KelvinToFahrenheit = (kelvin) => {
  return (kelvin - 273.15) * (9 / 5) + 32;
};

const TemperatureDisplay = ({ kelvin, unit }) => {
  const { isCelsius } = useTemperatureContext();
  const [convertedTemperature, setConvertedTemperature] = useState(
    KelvinToCelsius(kelvin).toFixed(2)
  );

  useEffect(() => {
    if (isCelsius) {
      setConvertedTemperature(KelvinToCelsius(kelvin).toFixed(2));
    } else {
      setConvertedTemperature(KelvinToFahrenheit(kelvin).toFixed(2));
    }
  }, [kelvin, isCelsius]);

  return (
    <div className='temperature-display'>
      <p >
        {convertedTemperature} {isCelsius ? '°C' : '°F'}
      </p>
    </div>
  );
};

export default TemperatureDisplay;
