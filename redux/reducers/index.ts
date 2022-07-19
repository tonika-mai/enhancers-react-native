import {combineReducers} from 'redux';
import currentCityWeather from './currentCityWeather.ts';

const AppReducer = combineReducers({currentCityWeather});

export default AppReducer;
