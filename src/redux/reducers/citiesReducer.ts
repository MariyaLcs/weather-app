import { City, Action } from '../../types.ts'

const initialState: City[] = [];

function citiesReducer(state: City[] = initialState, action: Action): City[] {
  switch (action.type) {
    case 'ADD_CITY':
      return [...state, action.payload];
    case 'REMOVE_CITY':
      return state.filter(city => city.id !== action.payload);
    default:
      return state;
  }
}

export default citiesReducer;
