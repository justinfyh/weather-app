import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import '../App.css';


const Main = () => {
    const [city, setCity] = useState('');
    let navigate = useNavigate();

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            navigate(`/weather/${city}`);
        }
    };

    return (
        <div className="App-header">
            {/* <header > */}
                <p>Weather App</p>
                <input type="text" placeholder="Enter city" value={ city } onKeyDown={handleEnter} onChange={(e) => setCity(e.target.value)}/>
                <Link to={`/weather/${city}`} className="button"><FontAwesomeIcon icon={faArrowRight} /></Link>
            {/* </header> */}
        </div>
    );
};

export default Main;