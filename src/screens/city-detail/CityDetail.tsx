import {SafeAreaView, ScrollView, View} from 'react-native';
import {formatLongDate, formatTemperature} from '../../utils';

import {City} from '../home/Home.types';
import Icon from '../../components/atoms/icon';
import IconBtn from '../../components/molecules/icon-btn';
import Nav from '../../components/nav';
import React from 'react';
import Typography from '../../components/atoms/typography';
import DayCard from '../../components/organisms/day-card';
import HoursSlider from '../../components/organisms/hours-slider';
import styles from './CityDetail.styles';
import dayjs from 'dayjs';

const CityDetail: React.FC<{
  navigation: any;
  currentWeather: City;
  favoriteCities: City[];
  addToFavs: () => any;
  removeFromFavs: () => any;
}> = ({
  navigation,
  currentWeather,
  favoriteCities,
  addToFavs,
  removeFromFavs,
}) => {
  const favCityNames = favoriteCities.map(city => city?.name);
  const hourlyForecast = currentWeather.hourly;
  const currentHour = dayjs.unix(hourlyForecast?.[0].dt).format('HH');
  const hoursLeftToday = 24 - parseInt(currentHour);
  const hoursToRender = hourlyForecast?.slice(0, hoursLeftToday);

  const goBack = () => {
    navigation.goBack();
  };

  const removeCityFromFavs = (cityName: string) => {
    removeFromFavs(cityName);
  };

  const addCityToFavorites = cityWeather => {
    addToFavs(cityWeather);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, styles.flexRow]}>
        <IconBtn name="arrowLeft" onPress={goBack} />
        <Typography align="center" weight="bold" size={32} color="textContrast">
          {currentWeather.name}
        </Typography>
        {favCityNames.includes(currentWeather.name) ? (
          <IconBtn
            name="remove"
            onPress={() => removeCityFromFavs(currentWeather.name)}
          />
        ) : (
          <IconBtn
            name="add_contrast"
            onPress={() => addCityToFavorites(currentWeather)}
          />
        )}
      </View>
      <ScrollView>
        <View>
          <Typography align="center" color="textContrast" size={20}>
            {formatLongDate(
              currentWeather.current?.dt,
              currentWeather.timezone,
            )}
          </Typography>
          <Typography align="center" color="textContrast" size={16}>
            {currentWeather.current?.weather[0].main}
          </Typography>
        </View>
        <View style={styles.mainWeather}>
          <Icon name={currentWeather.current?.weather[0].icon} />
          <Typography color="textContrast" size={110} weight="bold">
            {formatTemperature(currentWeather.current?.temp)}
          </Typography>
        </View>
        <View style={styles.sliderContainer}>
          <HoursSlider
            hours={hoursToRender}
            timezone={currentWeather.timezone}
          />
        </View>
        <ScrollView horizontal style={styles.cityCardsContainer}>
          {currentWeather.daily.map(day => (
            <DayCard
              key={day.dt}
              day={day}
              timezone={currentWeather.timezone}
            />
          ))}
        </ScrollView>
      </ScrollView>
      <Nav />
    </SafeAreaView>
  );
};

export default CityDetail;
