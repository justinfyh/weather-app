// ToggleSwitch.js
import React from 'react';
import { useTemperatureContext } from './TemperatureContext';

const ToggleSwitch = () => {
  const { isCelsius, toggleTemperatureUnit } = useTemperatureContext();

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isCelsius}
        onChange={toggleTemperatureUnit}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
