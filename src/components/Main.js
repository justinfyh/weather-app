import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const Main = () => {
    return (
        <div className="App">
            <header >
                <Link to="/weather" className="App-header">Weather App</Link>
            </header>
        </div>
    );
};

export default Main;