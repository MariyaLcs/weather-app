import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CityWeather from './CityWeather.tsx';
import CityDetail from './CityDetail.tsx';
import Header from './Header.tsx';
import { fetchWeatherForCity } from './redux/thunks.ts';
import { RootState } from './types.ts';
import { AppDispatch } from './redux/store.ts';

const defaultCities = ['Manchester', 'Novosibirsk', 'Warrington', 'Prestatyn', 'Hurghada', 'Naples', 'Burgas'];

function App ()
{
  const cities = useSelector((state: RootState) => state.city);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() =>
  {
    defaultCities.forEach(city =>
    {
      dispatch(fetchWeatherForCity(city));
    });
  }, [dispatch]);

  const handleAddCity = (cityName: string) =>
  {
    dispatch(fetchWeatherForCity(cityName));
  };

  return (
    <Router>
      <Header onAddCity={ handleAddCity } />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={
            <div className="row">
              { cities && cities.map(city => (
                <CityWeather
                  key={ city.id }
                  id={ city.id }
                  cityName={ city.cityName }
                  currentTemp={ city.currentTemp }
                  weatherIcon={ city.weatherIcon }
                />
              )) }
            </div>
          } />
          <Route path="/city/:id" element={ <CityDetail /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
