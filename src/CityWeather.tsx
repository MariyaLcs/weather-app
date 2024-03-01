import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon.tsx';
import { removeCity } from './redux/actions/cityActions.ts';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CityWeather ({ id, cityName, currentTemp, weatherIcon })
{
  const dispatch = useDispatch();
  const handleRemoveCity = () =>
  {
    dispatch(removeCity(id));
  };
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card mb-3">
        <div className="card-body city-weather">
          <h5 className="card-title font-bold text-white">{ cityName }</h5>
          <p className="card-text text-white">Temp: { currentTemp }</p>
          <div className="d-flex justify-content-between align-items-center">
            <WeatherIcon weatherIcon={ weatherIcon } /></div>
          <button className="delete-icon btn btn-sm btn-light mx-3" onClick={ handleRemoveCity }>
            <FontAwesomeIcon icon={ faTrashAlt } />
          </button>
          <Link to={ `/city/${id}` } className="btn btn-outline-light btn-sm ">View Details</Link>

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
