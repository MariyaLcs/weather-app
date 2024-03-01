import React from 'react';

function WeatherIcon ({ weatherIcon, size })
{
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@${size}x.png`;

  return <img src={ iconUrl } alt="Weather icon" className="mx-auto d-block m-3" />;
}

export default WeatherIcon
