import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({weatherInfo}) {
  return (
    <div style={{display: "flex",justifyContent: "center",alignItems:"center"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1721313859415-706a15eecbed?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Temperature:</b> {weatherInfo.temp}°C
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Max Temperature:</b> {weatherInfo.temp_max}°C
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Min Temperature:</b> {weatherInfo.temp_min}°C
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Humidity:</b> {weatherInfo.humidity}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Wind Speed:</b> {weatherInfo.wind_speed} Km/h
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <i>The weather can be described as {weatherInfo.description} and feels like {weatherInfo.feels_like}°C</i>
        </Typography>
        
      </CardContent>
    </Card>
    </div>
  );
}