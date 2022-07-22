import {
  ADD_TO_FAVS,
  REMOVE_FROM_FAVS,
  UPDATE_FAV_CITY_WEATHER,
} from '../constants';

type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  citiesList: [],
};

const favoriteCities = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_FAV_CITY_WEATHER:
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
    case ADD_TO_FAVS:
      return {
        ...state,
        citiesList: [action.payload, ...state.citiesList],
      };
    case REMOVE_FROM_FAVS:
      return state;
    default:
      return state;
  }
};

export default favoriteCities;
