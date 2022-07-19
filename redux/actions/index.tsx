import {SET_CURRENT_CITY_WEATHER} from '../types';

const setCurrentCityWeather = (payload: object) => ({
  type: SET_CURRENT_CITY_WEATHER,
  payload,
});

export default {
  setCurrentCityWeather,
};
