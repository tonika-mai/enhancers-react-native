import {SET_FAV_CITY_WEATHER} from '../constants';

type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  // TODO remove mock data
  citiesList: [
    {
      name: 'London',
      date: 'Friday 18, september',
      time: '2:38 p.m.',
      temp: '18°',
      icon: 'add',
      lat: 44.2222,
      lon: 45.8998,
    },
    {
      name: 'Turin',
      date: 'Friday 18, september',
      time: '3:38 p.m.',
      temp: '22°',
      icon: 'search',
      lat: 44.568,
      lon: 45.34,
    },
    {
      name: 'Rome',
      date: 'Friday 18, september',
      time: '3:38 p.m.',
      temp: '20°',
      icon: 'home',
      lat: 41.2222,
      lon: 49.8998,
    },
  ],
};

const favoriteCities = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case SET_FAV_CITY_WEATHER:
      const updatedCities = state.citiesList.map(city => {
        if (city.name === action.payload.cityName) {
          return {
            name: city.name,
            ...action.payload.weather,
          };
        }
        return city;
      });
      return {...state, citiesList: updatedCities};
    default:
      return state;
  }
};

export default favoriteCities;
