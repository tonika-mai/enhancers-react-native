import {Button, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';

import AppModal from '../../components/organisms/modal';
import {City} from './Home.types';
import CityCard from '../../components/organisms/city-card';
import IconTextBtn from '../../components/molecules/icon-text-btn';
import Nav from '../../components/nav';
import Typography from '../../components/atoms/typography';
import {getWeatherFromCoords} from '../../../networking';
import styles from './Home.styles';

const Home: React.FC<{
  navigation: any;
  favoriteCities: City[];
  updateFavWeather: () => any;
}> = ({navigation, favoriteCities, updateFavWeather}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function renderCityCard({item}) {
    return <CityCard data={item} />;
  }

  function openModal() {
    setIsModalVisible(true);
  }

  useEffect(() => {
    if (favoriteCities.length > 0) {
      favoriteCities.forEach(async city => {
        const weather = await getWeatherFromCoords(city.lat, city.lon);
        updateFavWeather(weather, city.name);
      });
    }
  }, []);

  return (
    <SafeAreaView style={[styles.container, styles.flexGrow]}>
      <Typography weight="semibold" align="center" size={28}>
        Good morning!
      </Typography>
      <Typography weight="semibold" align="center" size={28}>
        Mario
      </Typography>
      <IconTextBtn icon="add" onPress={openModal}>
        Add city
      </IconTextBtn>
      {/* <Button
          onPress={() => navigation.navigate('CityDetail')}
          title="Dettagli"
        /> */}
      <FlatList
        data={favoriteCities}
        renderItem={renderCityCard}
        keyExtractor={item => item.name}
        style={styles.cardsContainer}
      />
      <Nav />
      <AppModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        title="Add city">
        <Typography weight="semibold" align="center" size={28}>
          CIAO
        </Typography>
      </AppModal>
    </SafeAreaView>
  );
};

export default Home;
