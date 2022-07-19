import axios from 'axios';

const openWeatherAPIKey = '0e0ae40be39a37639254d653eed5402c';
const axiosWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/',
});
axiosWeather.interceptors.request.use(config => {
  config.params.appid = openWeatherAPIKey;
  config.params.units = 'metric';
  return config;
});

export async function getWeatherFromCoords(lat, lon) {
  try {
    store.dispatch(setLoading(true));
    const res = await axiosWeather.get('data/2.5/onecall', {
      params: {
        lat,
        lon,
        exclude: 'minutely,alerts',
      },
    });
    store.dispatch(setLoading(false));
    return res.data;
  } catch (err) {
    store.dispatch(setLoading(false));
    store.dispatch(setError(true));
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
