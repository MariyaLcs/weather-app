const initialState = [
  { id: 1, cityName: 'New York' },
  { id: 2, cityName: 'London' },
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
