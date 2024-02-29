const initialState = [];

function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CITY':
      return [...state, action.payload];
    case 'REMOVE_CITY':
      return state.filter(city => city.id !== action.payload.id);
    default:
      return state;
  }
}

export default citiesReducer;
