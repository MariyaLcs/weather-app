export const addCity = ({ cityName, currentTemp = 'N/A', weatherIcon = 'default-icon' }) => {
  console.log("Dispatching addCity with:", { cityName, currentTemp, weatherIcon });
  const id = Date.now();

  return {
    type: 'ADD_CITY',
    payload: {
      id,
      cityName,
      currentTemp,
      weatherIcon
    }
  };
};
