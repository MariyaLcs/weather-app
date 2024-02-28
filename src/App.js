import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CityWeather from './CityWeather';
import AddCityForm from './AddCityForm';
import { addCity } from './redux/actions/cityActions';

function App() {
  const cities = useSelector((state) => state.city.cities);
  const dispatch = useDispatch();

  const handleAddCity = (cityName) => {
    const newCity = {
      id: Date.now(), 
      cityName,
      currentTemp: 'N/A', 
      weatherIcon: 'default-icon' 
    };
    dispatch(addCity(newCity)); 
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2>MyWeather</h2>
        <AddCityForm onAddCity={handleAddCity} />
      </div>
      <div className="row">
        {cities.map(city => (
          <CityWeather key={city.id} cityName={city.cityName} currentTemp={city.currentTemp} weatherIcon={city.weatherIcon} />
        ))}
      </div>
    </div>
  );
}

export default App;
