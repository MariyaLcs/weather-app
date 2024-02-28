const initialState = [
  { id: 1, cityName: 'Tokyo', currentTemp: '16°C', weatherIcon: 'cloud' },
  { id: 2, cityName: 'Delhi', currentTemp: '26°C', weatherIcon: 'sun' },
  { id: 3, cityName: 'Beijing', currentTemp: '10°C', weatherIcon: 'wind' },
  { id: 4, cityName: 'Moscow', currentTemp: '-5°C', weatherIcon: 'snowflake' },
  { id: 5, cityName: 'Jakarta', currentTemp: '30°C', weatherIcon: 'rain' },
  { id: 6, cityName: 'Cairo', currentTemp: '20°C', weatherIcon: 'sun-cloud' },
];

function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CITY':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default citiesReducer;
