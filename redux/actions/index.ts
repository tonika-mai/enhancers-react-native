import {SET_CURRENT_CITY_WEATHER} from '../constants';

const setCurrentCityWeather = payload => ({
  type: SET_CURRENT_CITY_WEATHER,
  payload,
});

export default {
  setCurrentCityWeather,
};
