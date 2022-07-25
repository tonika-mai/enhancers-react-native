interface ShortWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface DayTemps {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

interface DayTempsMinMax extends DayPhasesTemps {
  min: number;
  max: number;
}

interface SunriseSunset {
  sunrise: number;
  sunset: number;
}

interface BaseWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  pressure: number;
  uvi: number;
  weather: ShortWeather[];
  wind_deg: number;
  wind_speed: number;
}

interface CurrentWeather extends BaseWeather, SunriseSunset {
  feels_like: number;
  temp: number;
  visibility: number;
}

interface DailyWeather extends BaseWeather, SunriseSunset {
  feels_like: DayTemps;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  temp: DayTempsMinMax;
  wind_gust: number;
}

interface HourlyWeather extends BaseWeather {
  feels_like: number;
  pop: number;
  temp: number;
  visibility: number;
  wind_gust: number;
}

interface City {
  current: CurrentWeather;
  daily: DailyWeather[];
  hourly: HourlyWeather[];
  lat: number;
  lon: number;
  name: string;
  timezone: string;
  timezone_offset: number;
}

export interface HomePropTypes {
  navigation: any;
  favoriteCities: City[];
  updateFavWeather: () => any;
  setCurrentWeather: () => any;
  removeFromFavs: () => any;
}
