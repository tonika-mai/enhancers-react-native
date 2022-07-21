import IconBtn from '../molecules/icon-btn';
import React from 'react';
import {View} from 'react-native';
import styles from './Nav.styles';

// TODO imgs should come from props

const Nav: React.FC = () => {
  return (
    <View style={styles.container}>
      <IconBtn name="home" />
      <IconBtn name="search" />
      <IconBtn name="location" />
    </View>
  );
};

export default Nav;
