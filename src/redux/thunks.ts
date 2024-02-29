import { addCity } from './actions/cityActions.ts';
import { AppDispatch } from './store.ts';

export const fetchWeatherForCity = (cityName:string) => async (dispatch: AppDispatch) => {
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; // Ensure you have your API key in .env
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const newCity = {
        id: data.id, 
        cityName: data.name,
        currentTemp: `${data.main.temp}°C`,
        weatherIcon: data.weather[0].icon,
      };

      dispatch(addCity(newCity));
    } else {
      console.error('Failed to fetch weather data:', data.message);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};
