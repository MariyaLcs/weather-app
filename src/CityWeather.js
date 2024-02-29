import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

function CityWeather({ cityName, currentTemp, weatherIcon }) {
  return (
    <div className="col-md-3 col-sm-6"> 
      <div className="card mb-3">
        <div className="card-body city-weather">
          <h5 className="card-title font-bold text-white">{cityName}</h5>
          <p className="card-text text-white">Temp:  {currentTemp}</p>
         <WeatherIcon weatherIcon={weatherIcon}/>
        </div>
      </div>
    </div>
  );
}


CityWeather.propTypes = {
  cityName: PropTypes.string.isRequired,
  currentTemp: PropTypes.string,
  weatherIcon: PropTypes.string,
};

export default CityWeather;
