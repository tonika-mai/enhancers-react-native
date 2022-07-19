import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import React from 'react';
import theme from '../theme.ts';

const Nav: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../assets/icons/Home.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons/Search.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons/Location.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.white,
    borderRadius: theme.borderRadius,
    height: 78,
    elevation: 8,
  },
});

export default Nav;
