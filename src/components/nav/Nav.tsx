import {Image, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './Nav.styles';

// TODO imgs should come from props

const Nav: React.FC = () => {
  console.log({styles});
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../../../assets/icons/Home.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../../assets/icons/Search.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../../assets/icons/Location.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
