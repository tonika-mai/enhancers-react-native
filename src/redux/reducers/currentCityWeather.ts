import {SET_CURRENT_CITY_WEATHER} from '../constants';

type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  weather: {},
};

const currentCityWeather = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_CITY_WEATHER:
      return {
        ...state,
        weather: {
          name: action.payload.cityName,
          ...action.payload.weather,
        },
      };
    default:
      return state;
  }
};

export default currentCityWeather;
