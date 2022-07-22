import {SafeAreaView, ScrollView, View} from 'react-native';
import {formatLongDate, formatTemperature, formatTime} from '../../../utils';

import {City} from '../home/Home.types';
import Icon from '../../components/atoms/icon';
import IconBtn from '../../components/molecules/icon-btn';
import Nav from '../../components/nav';
import React from 'react';
import Typography from '../../components/atoms/typography';
import styles from './CityDetail.styles';

const CityDetail: React.FC<{navigation: any; currentWeather: City}> = ({
  navigation,
  currentWeather,
}) => {
  function goBack() {
    navigation.goBack();
  }
  console.log({currentWeather});
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.header, styles.flexRow]}>
          <IconBtn name="arrowLeft" onPress={goBack} />
          <Typography
            align="center"
            weight="bold"
            size={32}
            color="textContrast">
            {currentWeather.name}
          </Typography>
          <IconBtn name="add_contrast" />
        </View>
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
        {/* slider */}
      </ScrollView>
      <Nav />
    </SafeAreaView>
  );
};

export default CityDetail;
