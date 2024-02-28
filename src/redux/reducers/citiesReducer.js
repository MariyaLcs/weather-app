const initialState = {
    cities: [{ id: 1, cityName: 'New York' },
    { id: 2, cityName: 'London' },]
  };
  
  function citiesReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_CITY':
        return {
          ...state,
          cities: [...state.cities, action.payload]
        };
      default:
        return state;
    }
  }
  
  export default citiesReducer;
