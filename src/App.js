import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Weather from './components/Weather';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={ Main } />
        <Route path='/weather/:city' exact Component={ Weather } />
      </Routes>
    </Router>
  );
}

export default App;
