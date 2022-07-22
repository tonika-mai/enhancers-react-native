import {
  ADD_TO_FAVS,
  REMOVE_FROM_FAVS,
  SET_CURRENT_CITY_WEATHER,
  UPDATE_FAV_CITY_WEATHER,
} from '../constants';

const setCurrentCityWeather = payload => ({
  type: SET_CURRENT_CITY_WEATHER,
  payload,
});

const updateFavCityWeather = payload => ({
  type: UPDATE_FAV_CITY_WEATHER,
  payload,
});

const addToFavs = payload => ({
  type: ADD_TO_FAVS,
  payload,
});

const removeFromFavs = payload => ({
  type: REMOVE_FROM_FAVS,
  payload,
});

export default {
  setCurrentCityWeather,
  updateFavCityWeather,
  addToFavs,
  removeFromFavs,
};
