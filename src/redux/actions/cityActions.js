export const addCity = ({ id, cityName, currentTemp = 'N/A', weatherIcon = 'default-icon' }) => {
  console.log("Dispatching addCity with:", { id, cityName, currentTemp, weatherIcon });

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

export const REMOVE_CITY = 'REMOVE_CITY';

export const removeCity = id => ({
  type: REMOVE_CITY,
  payload: id,
});
