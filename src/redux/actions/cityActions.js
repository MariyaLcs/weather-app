export const addCity = (cityName, currentTemp = 'N/A', weatherIcon = 'default-icon') => {
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
