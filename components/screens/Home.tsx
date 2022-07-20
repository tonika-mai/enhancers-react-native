import {Button, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {AppTitle} from '../typography';
import Nav from '../nav';
import React from 'react';
import actions from '../../redux/actions';
import theme from '../../theme.ts';

const Home: React.FC = ({navigation}) => {
  const dispatch = useDispatch();
  const {currentCityWeather} = useSelector(state => state.currentCityWeather);
  console.log({currentCityWeather});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <AppTitle>Good morning!</AppTitle>
        <AppTitle>Mario</AppTitle>
        <Button
          onPress={() => navigation.navigate('CityDetail')}
          title="Dettagli"
        />
        <Button
          onPress={() => dispatch(actions.setCurrentCityWeather('Torino'))}
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

export default Home;
