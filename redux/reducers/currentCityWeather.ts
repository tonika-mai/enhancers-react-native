import {SET_CURRENT_CITY_WEATHER} from '../constants';

type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  currentCityWeather: {},
};

const currentCityWeather = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_CITY_WEATHER:
      return {...state, currentCityWeather: {name: action.payload}};
    default:
      return state;
  }
};

export default currentCityWeather;
