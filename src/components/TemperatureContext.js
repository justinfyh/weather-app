// TemperatureContext.js
import React, { createContext, useContext, useState } from 'react';

const TemperatureContext = createContext();

export const useTemperatureContext = () => {
  return useContext(TemperatureContext);
};

export const TemperatureProvider = ({ children }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  const contextValue = {
    isCelsius,
    toggleTemperatureUnit,
  };

  return (
    <TemperatureContext.Provider value={contextValue}>
      {children}
    </TemperatureContext.Provider>
  );
};
