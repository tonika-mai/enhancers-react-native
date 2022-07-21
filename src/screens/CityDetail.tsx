import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {AppTitle} from '../components/atoms/typography';
import Nav from '../components/nav';
import React from 'react';
import theme from '../../theme.ts';

const CityDetail: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <AppTitle>Pippo</AppTitle>
    </ScrollView>
    <Nav />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing,
  },
});

export default CityDetail;
