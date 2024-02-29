import React from 'react';

function WeatherIcon({ weatherIcon }) {
    const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
  
    return <img src={iconUrl} alt="Weather icon" />;
  }

  export default WeatherIcon
