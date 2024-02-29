export interface City {
  id: number;
  cityName: string;
  currentTemp: string;
  weatherIcon: string;
}

export type State = City[];

export interface CitiesState {
  cities: City[];
}

export interface RootState {
  city: CitiesState;
}

export interface AddCityAction {
  type: 'ADD_CITY';
  payload: City;
}

export interface RemoveCityAction {
  type: 'REMOVE_CITY';
  payload: number;
}

export type Action = AddCityAction | RemoveCityAction;
