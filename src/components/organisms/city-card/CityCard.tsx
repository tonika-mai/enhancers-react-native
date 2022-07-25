import {TouchableOpacity, View} from 'react-native';
import {formatLongDate, formatTemperature, formatTime} from '../../../utils';

import Icon from '../../atoms/icon';
import IconBtn from '../../molecules/icon-btn';
import React from 'react';
import Typography from '../../atoms/typography';
import styles from './CityCard.styles';

const CityCard: ReactFC = ({onCardPress, data, editMode, onRemovePress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCardPress}>
      {editMode ? (
        <View style={styles.removeBtnContainer}>
          <IconBtn name="remove_filled" onPress={onRemovePress} />
        </View>
      ) : null}
      <View style={styles.flexGrow}>
        <Typography color="textContrast" size={26}>
          {data.name}
        </Typography>
        <Typography color="textContrast" size={15}>
          {formatLongDate(data.current?.dt, data.timezone)}
        </Typography>
        <Typography color="textContrast" size={12}>
          {formatTime(data.current?.dt, data.timezone)}
        </Typography>
      </View>
      <Icon
        name={data.current?.weather[0]?.icon}
        style={[styles.flexGrow, styles.image]}
      />
      <View style={[styles.flexGrow, styles.tempContainer]}>
        <Typography color="textContrast" size={50} weight="bold">
          {formatTemperature(data.current?.temp)}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default CityCard;
