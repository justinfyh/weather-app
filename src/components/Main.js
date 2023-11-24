import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import '../App.css';


const Main = () => {
    const [city, setCity] = useState('');


    return (
        <div className="App-header">
            {/* <header > */}
                <p>Weather App</p>
                <input type="text" placeholder="Enter city" value={ city } onChange={(e) => setCity(e.target.value)}/>
                <Link to={`/weather/${city}`} className="button"><FontAwesomeIcon icon={faArrowRight} /></Link>
            {/* </header> */}
        </div>
    );
};

export default Main;