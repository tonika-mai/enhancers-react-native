import React from 'react';
import {View} from 'react-native';
import styles from './Dot.styles';

const Dot: React.FC<{size: number}> = ({size}) => (
  <View style={[{width: size, height: size}, styles.dot]} />
);

export default Dot;
