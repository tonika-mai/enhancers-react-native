import {IconProps} from './Icon.types';
import {Image} from 'react-native';
import React from 'react';

const iconsMap = {
  add: require('../../../../assets/icons/Add.png'),
  add_contrast: require('../../../../assets/icons/Add_contrast.png'),
  arrowLeft: require('../../../../assets/icons/ArrowLeft.png'),
  city: require('../../../../assets/icons/City.png'),
  close: require('../../../../assets/icons/Close.png'),
  edit: require('../../../../assets/icons/Edit.png'),
  home: require('../../../../assets/icons/Home.png'),
  location: require('../../../../assets/icons/Location.png'),
  remove: require('../../../../assets/icons/Remove.png'),
  remove_filled: require('../../../../assets/icons/Remove_filled.png'),
  save: require('../../../../assets/icons/Save.png'),
  search: require('../../../../assets/icons/Search.png'),
  '01d': require('../../../../assets/icons/weather/01d.png'),
  '01n': require('../../../../assets/icons/weather/01n.png'),
  '02d': require('../../../../assets/icons/weather/02d.png'),
  '02n': require('../../../../assets/icons/weather/02n.png'),
  '03d': require('../../../../assets/icons/weather/03d.png'),
  '03n': require('../../../../assets/icons/weather/03n.png'),
  '04d': require('../../../../assets/icons/weather/04d.png'),
  '04n': require('../../../../assets/icons/weather/04n.png'),
  '09d': require('../../../../assets/icons/weather/09d.png'),
  '09n': require('../../../../assets/icons/weather/09n.png'),
  '10d': require('../../../../assets/icons/weather/10d.png'),
  '10n': require('../../../../assets/icons/weather/10n.png'),
  '11d': require('../../../../assets/icons/weather/11d.png'),
  '11n': require('../../../../assets/icons/weather/11n.png'),
  '13d': require('../../../../assets/icons/weather/13d.png'),
  '13n': require('../../../../assets/icons/weather/13n.png'),
  '50d': require('../../../../assets/icons/weather/50d.png'),
  '50n': require('../../../../assets/icons/weather/50n.png'),
};

const Icon: React.FC<IconProps> = ({name, style}) => {
  return <Image source={iconsMap[name]} style={style} />;
};

export default Icon;
