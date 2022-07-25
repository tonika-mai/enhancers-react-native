import IconBtn from '../molecules/icon-btn';
import React from 'react';
import {View} from 'react-native';
import styles from './Nav.styles';
import {NavProps} from './Nav.types.ts';

const Nav: React.FC<NavProps> = ({buttons}) => {
  return (
    <View style={styles.container}>
      {buttons.map(button => (
        <IconBtn
          key={button.name}
          name={button.name}
          onPress={button.onPress}
        />
      ))}
    </View>
  );
};

export default Nav;
