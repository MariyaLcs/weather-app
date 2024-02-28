import React from 'react';
import PropTypes from 'prop-types';

function CityWeather({ cityName }) {
  return (
    <div className="col-md-3 col-sm-6"> 
      <div className="card mb-3">
        <div className="card-body city-weather ">
          <h5 className="card-title font-bold text-white">{cityName}</h5>
        </div>
      </div>
  </div>
  );
}

CityWeather.propTypes = {
  cityName: PropTypes.string.isRequired, 
};

export default CityWeather;
