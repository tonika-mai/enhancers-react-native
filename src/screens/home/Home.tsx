import {Button, FlatList, SafeAreaView, View} from 'react-native';

import CityCard from '../../components/organisms/city-card';
import IconTextBtn from '../../components/molecules/icon-text-btn';
import Nav from '../../components/nav';
import React from 'react';
import Typography from '../../components/atoms/typography';
import styles from './Home.styles';

const Home: React.FC = ({navigation, favoriteCities}) => {
  function renderCityCard({item}) {
    return <CityCard data={item} />;
  }

  return (
    <SafeAreaView style={[styles.container, styles.flexGrow]}>
      <Typography weight="semibold" align="center" size={28}>
        Good morning!
      </Typography>
      <Typography weight="semibold" align="center" size={28}>
        Mario
      </Typography>
      <IconTextBtn icon="add">Add city</IconTextBtn>
      {/* <Button
          onPress={() => navigation.navigate('CityDetail')}
          title="Dettagli"
        /> */}
      <FlatList
        data={favoriteCities}
        renderItem={renderCityCard}
        keyExtractor={item => item.cityName}
        style={styles.cardsContainer}
      />
      <Nav />
    </SafeAreaView>
  );
};

export default Home;
