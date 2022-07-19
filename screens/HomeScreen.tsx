import {Button, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {AppTitle} from '../components/Typography.tsx';
import Nav from '../components/Nav.tsx';
import React from 'react';
import theme from '../theme.js';

const HomeScreen: React.FC = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <AppTitle>Good morning!</AppTitle>
        <AppTitle>Mario</AppTitle>
        <Button
          onPress={() => navigation.navigate('CityDetail')}
          title="Torino"
        />
      </ScrollView>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing,
  },
});

export default HomeScreen;
