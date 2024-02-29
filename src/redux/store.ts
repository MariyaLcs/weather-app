import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/citiesReducer.ts';


export const store = configureStore({
  reducer: {
    city: rootReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
