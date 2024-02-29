import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CityWeather from './CityWeather';
import AddCityForm from './AddCityForm';
import { fetchWeatherForCity } from './redux/thunks';

const defaultCities = ['New York', 'London', 'Tokyo', 'Sydney', 'Delhi', 'Beijing', 'Moscow', 'Jakarta', 'Cairo']; 

function App() {
  const cities = useSelector((state) => state.city.cities);
  const dispatch = useDispatch();


  useEffect(() => {
    defaultCities.forEach(city => {
      dispatch(fetchWeatherForCity(city));
    });
  }, [dispatch]); 

  const handleAddCity = (cityName) => {
    dispatch(fetchWeatherForCity(cityName));
  };
  
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2>MyWeather</h2>
        <AddCityForm onAddCity={handleAddCity} />
      </div>
      <div className="row">
        {cities.map(city => (
          <CityWeather key={city.id} id={city.id} cityName={city.cityName} currentTemp={city.currentTemp} weatherIcon={city.weatherIcon} />
        ))}
      </div>
    </div>
  );
}

export default App;
