import {combineReducers} from 'redux';
import currentCityWeather from './currentCityWeather.tsx';

const AppReducer = combineReducers({currentCityWeather});

export default AppReducer;
