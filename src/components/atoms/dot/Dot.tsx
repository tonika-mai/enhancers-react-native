import React from 'react';
import {View} from 'react-native';
import {DotProps} from './Dot.types';
import styles from './Dot.styles';

const Dot: React.FC<DotProps> = ({size}) => (
  <View style={[{width: size, height: size}, styles.dot]} />
);

export default Dot;
