import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer.ts';

const rootReducer = combineReducers({
  cities: citiesReducer
});

export default rootReducer;
