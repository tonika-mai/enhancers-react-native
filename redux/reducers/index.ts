import {combineReducers} from 'redux';
import currentCityWeather from './currentCityWeather.ts';
import favoriteCities from './favoriteCities.ts';

const AppReducer = combineReducers({currentCityWeather, favoriteCities});

export default AppReducer;
