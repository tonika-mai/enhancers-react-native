import {Button, SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import IconTextBtn from '../../components/molecules/icon-text-btn';
import Nav from '../../components/nav';
import React from 'react';
import Typography from '../../components/atoms/typography';
import actions from '../../../redux/actions';
import styles from './Home.styles';

const Home: React.FC = ({navigation}) => {
  const dispatch = useDispatch();
  const {currentCityWeather} = useSelector(state => state.currentCityWeather);
  console.log({currentCityWeather});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Typography weight="semibold" align="center" size={28}>
          Good morning!
        </Typography>
        <Typography weight="semibold" align="center" size={28}>
          Mario
        </Typography>
        <IconTextBtn icon="add">Add city</IconTextBtn>
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

export default Home;
