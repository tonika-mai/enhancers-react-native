import {TouchableOpacity, View} from 'react-native';

import Icon from '../../atoms/icon';
import React from 'react';
import Typography from '../../atoms/typography';
import styles from './CityCard.styles';

const CityCard: ReactFC = ({onPress, data}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.flexGrow}>
        <Typography color="textContrast" size={26}>
          {data.cityName}
        </Typography>
        <Typography color="textContrast" size={15}>
          {data.date}
        </Typography>
        <Typography color="textContrast" size={12}>
          {data.time}
        </Typography>
      </View>
      <Icon name={data.icon} style={styles.flexGrow} />
      <View style={[styles.flexGrow, styles.tempContainer]}>
        <Typography color="textContrast" size={50} weight="bold">
          {data.temp}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default CityCard;
