// ToggleSwitch.js
import React from 'react';
import { useTemperatureContext } from './TemperatureContext';

const ToggleSwitch = () => {
  const { isCelsius, toggleTemperatureUnit } = useTemperatureContext();

  return (
    <div className="toggle-container">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isCelsius}
          onChange={toggleTemperatureUnit}
        />
        <span className="slider round"></span>
        
      </label>
      <p>{isCelsius ? '°C' : '°F'}</p>
    </div>
    
  );
};

export default ToggleSwitch;
