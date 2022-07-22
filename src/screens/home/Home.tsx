import {FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  getCoordsListFromCityName,
  getWeatherFromCoords,
} from '../../../networking';

import AppModal from '../../components/organisms/modal';
import {City} from './Home.types';
import CityCard from '../../components/organisms/city-card';
import IconTextBtn from '../../components/molecules/icon-text-btn';
import Nav from '../../components/nav';
import TextField from '../../components/atoms/text-field';
import Typography from '../../components/atoms/typography';
import styles from './Home.styles';
import {useDebounce} from 'use-debounce';

const Home: React.FC<{
  navigation: any;
  favoriteCities: City[];
  updateFavWeather: () => any;
  setCurrentWeather: () => any;
}> = ({navigation, favoriteCities, updateFavWeather, setCurrentWeather}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cityInput, setCityInput] = useState('');
  const [citiesOptions, setCitiesOptions] = useState([]);
  const [debouncedInput] = useDebounce(cityInput, 500);

  function renderCityCard({item}) {
    return <CityCard data={item} />;
  }

  function openModal() {
    setIsModalVisible(true);
  }

  async function selectCity(chosenCity) {
    const weather = await getWeatherFromCoords(chosenCity.lat, chosenCity.lon);
    setCurrentWeather(weather, chosenCity.name);
    navigation.navigate('CityDetail');
    setIsModalVisible(false);
  }

  useEffect(() => {
    if (favoriteCities.length > 0) {
      favoriteCities.forEach(async city => {
        const weather = await getWeatherFromCoords(city.lat, city.lon);
        updateFavWeather(weather, city.name);
      });
    }
  }, []);

  useEffect(() => {
    if (debouncedInput) {
      async function getCities(input) {
        const results = await getCoordsListFromCityName(input);
        setCitiesOptions(results.filter(city => city.country === 'IT'));
      }
      getCities(debouncedInput);
    }
  }, [debouncedInput]);

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
        <TextField value={cityInput} onChange={setCityInput} />
        {citiesOptions.map(city => (
          <IconTextBtn
            key={city.name}
            icon="city"
            onPress={() => selectCity(city)}>
            {city.name}
          </IconTextBtn>
        ))}
      </AppModal>
    </SafeAreaView>
  );
};

export default Home;
