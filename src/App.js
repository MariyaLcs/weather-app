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
      id: cities.length + 1,
      cityName,
    };
    dispatch(addCity(newCity))
  };

    return (
      <div className="container">
         <AddCityForm onAddCity={handleAddCity } />
        <div className="row">
          {cities.map(city => (
            <CityWeather key={city.id} cityName={city.cityName} />
          ))}
        </div>
   
         
      </div>
    );
  }


export default App;
