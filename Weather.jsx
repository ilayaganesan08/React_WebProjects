import React, { useState } from 'react';

import cloudy from "./assets/cloudy.png";
import searchicon from "./assets/searchicon.png";
import clear from "./assets/clear.png";
import wind2 from "./assets/wind2.png";
import humidity1 from "./assets/humidity1.png";

const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
    return (
        <>
            <div className='image'>
                <img src={icon} alt="image" />
            </div>
            <div className='temp'>{temp}°C</div>
            <div className='city'>{city}</div>
            <div className='country'>{country}</div>
            <div className='cord'>
                <div>
                    <span className='lat'>latitude</span>
                    <span>{lat}</span>
                </div>
                <div>
                    <span className='log'>longitude</span>
                    <span>{log}</span>
                </div>
            </div>
            <div className='data-container'>
                <div className='element'>
                <img src={humidity1} alt="humidity" className='icon' />
                </div>
                <div className='data'>
                    <div className='humidity-percent'>{humidity}%</div>
                    <div className="text">Humidity</div>
                </div>
                <div className='element'>
                <img src={wind2} alt="wind" className='icon' />
                </div>
                <div className='data'>
                    <div className='wind-percent'>{wind} km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
                <div className='copy-right'>
                <p>Designed By Kig</p>
            </div>
            </div>
        </>
    );
};



const Weather = () => {

    // let api_key="d09f5ffb54e881ca236d853bb0f5af4";
    const [icon, setIcon] = useState(clear);
    const [temp, setTemp] = useState(0);
    const [city, setCity] = useState("Chennai");
    const [country, setCountry] = useState("India");
    const [lat, setLat] = useState(0)
    const [log, setLog] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [wind, setWind] = useState(0)
    const [text, setText] = useState("Chennai")

//     const search = async ()=>{
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${api_key}&units=Metric`;
//     }
// const handleCity =(e)=>{
//     setText(e.target.value)

// }
    return (
        <>
            <div className='container'>
                <div className='input-container'>
                    <input type="text" placeholder='Enter the City' className='cityname'/>
                    <div className='search-icon'>
                        <img src={searchicon} alt="search" />
                    </div>
                </div>
                <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} />
            </div>
           
        </>
    )
}




export default Weather;