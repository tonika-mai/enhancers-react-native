import axios from 'axios';

const openWeatherAPIKey = '77938cfc3c7738dc1125b7fdbd1fae65';
const axiosWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/',
});
axiosWeather.interceptors.request.use(config => {
  config.params.appid = openWeatherAPIKey;
  config.params.units = 'metric';
  return config;
});

export async function getWeatherFromCoords(lat: number, lon: number) {
  try {
    const res = await axiosWeather.get('data/2.5/onecall', {
      params: {
        lat,
        lon,
        exclude: 'minutely,alerts',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCityNameFromCoords(lat, lon) {
  try {
    const res = await axiosWeather.get('geo/1.0/reverse', {
      params: {
        lat,
        lon,
        limit: 1,
      },
    });
    return res.data[0].name;
  } catch (err) {
    console.log(err);
  }
}

export async function getCoordsListFromCityName(cityName) {
  try {
    const res = await axiosWeather.get('geo/1.0/direct', {
      params: {
        q: cityName,
        limit: 5,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
