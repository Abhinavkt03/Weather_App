import React, { useState } from 'react';
import MediaCard from './WeatherCard';
import WeatherApp from './WeatherApp';

export default function WeatherDetails(){
const [weatherInfo,setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 24.84,
    temp: 25.05,
    temp_max: 25.05,
    temp_min: 25.05,
    humidity: 47,
    description: "haze",
    wind_speed: 3.09
});

let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
}

return (
    <>
    <WeatherApp updateInfo={updateInfo}/>
    <div style={{textAlign: "center"}}>
        <h2>Weather Details</h2>
        <MediaCard weatherInfo={weatherInfo}/>
    </div>
    </>
)
}