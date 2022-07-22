import {View} from 'react-native';
import {formatTemperature, formatDay} from '../../../../utils';

import Icon from '../../atoms/icon';
import React from 'react';
import Typography from '../../atoms/typography';
import styles from './DayCard.styles';

const DayCard: ReactFC = ({day, timezone}) => {
  return (
    <View style={styles.dayCard} elevation={4}>
      <Typography weight="bold" size={22} color="textContrast">
        {formatDay(day.dt, timezone)}
      </Typography>
      <Typography weight="bold" size={36} color="textContrast">
        {formatTemperature(day.temp.day)}
      </Typography>
      <Icon name={day.weather[0]?.icon} />
    </View>
  );
};

export default DayCard;
