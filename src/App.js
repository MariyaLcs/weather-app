import React, { useState  } from 'react';
import CityWeather from './CityWeather';
import AddCityForm from './AddCityForm';

function App() {
  const [cities, setCities] = useState([
    { id: 1, cityName: 'New York' },
    { id: 2, cityName: 'London' },
  ]);

  const addCity = (cityName) => {
    const newCity = {
      id: cities.length + 1,
      cityName,
    };
    setCities([...cities, newCity]);
  };

    return (
      <div className="container">
        <div className="row">
          {cities.map(city => (
            <CityWeather key={city.id} cityName={city.cityName} />
          ))}
        </div>
   
          <AddCityForm onAddCity={addCity} />
      </div>
    );
  }


export default App;
