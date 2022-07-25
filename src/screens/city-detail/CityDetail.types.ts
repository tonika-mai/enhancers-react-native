import {City} from '../home/Home.types';

export interface CityDetailPropTypes {
  navigation: any;
  currentWeather: City;
  favoriteCities: City[];
  addToFavs: () => any;
  removeFromFavs: () => any;
}
