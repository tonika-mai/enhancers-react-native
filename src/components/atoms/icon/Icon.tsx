import {IconProps} from './Icon.types';
import {Image} from 'react-native';
import React from 'react';

const iconsMap = {
  add: require('../../../../assets/icons/Add.png'),
  home: require('../../../../assets/icons/Home.png'),
  location: require('../../../../assets/icons/Location.png'),
  search: require('../../../../assets/icons/Search.png'),
};

const Icon: React.FC<IconProps> = ({name, style}) => {
  return <Image source={iconsMap[name]} style={style} />;
};

export default Icon;
