import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={ Main } />
      </Routes>
    </Router>
  );
}

export default App;
