import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import WeatherDetails from "./InfoBox";


export default function WeatherApp({updateInfo}) {
    let [city, setcity] = useState('');

    const handleChange = (e) => {
        setcity(e.target.value);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(city);
        generateWeather();
        setcity('');
        let newInfo = await generateWeather();
        updateInfo(newInfo);
    };

    const generateWeather = async ()=>{
        let API_URL = "https://api.openweathermap.org/data/2.5/weather";
        let API_KEY = '9e78e6b2a90e4bd0aa955ae5002600bb';
        
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let tempDetails = {
            city: city,
            temp: jsonResponse.main.temp,
            temp_max: jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min,
            feels_like: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,  
            description: jsonResponse.weather[0].description,  
            wind_speed: jsonResponse.wind.speed,  
        }
        console.log(tempDetails);
        return tempDetails;
    }

    return (
        <>
            <div className="city-search">
                <form className='search-form'>
                    <TextField id="outlined-basic" value={city} label="Outlined" variant="outlined" required style={{ marginRight: '10px', }} onChange={handleChange} />
                    <br />
                    <Button variant="contained" type='submit' onClick={handleClick}>Search</Button>
                </form>
            </div>
        </>
    )
}