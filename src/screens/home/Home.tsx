import {FlatList, SafeAreaView, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  getCoordsListFromCityName,
  getWeatherFromCoords,
} from '../../networking';

import AppModal from '../../components/organisms/modal';
import {City} from './Home.types';
import CityCard from '../../components/organisms/city-card';
import IconTextBtn from '../../components/molecules/icon-text-btn';
import IconBtn from '../../components/molecules/icon-btn';
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
  removeFromFavs: () => any;
}> = ({
  navigation,
  favoriteCities,
  updateFavWeather,
  setCurrentWeather,
  removeFromFavs,
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [cityInput, setCityInput] = useState<string>('');
  const [citiesOptions, setCitiesOptions] = useState<[]>([]);
  const [debouncedInput] = useDebounce(cityInput, 500);

  function openModal() {
    setIsModalVisible(true);
  }

  async function selectCity(chosenCity) {
    const weather = await getWeatherFromCoords(chosenCity.lat, chosenCity.lon);
    setCurrentWeather(weather, chosenCity.name);
    navigation.navigate('CityDetail');
  }

  function selectCityFromModal(chosenCity) {
    selectCity(chosenCity);
    setIsModalVisible(false);
    setCityInput('');
    setCitiesOptions([]);
  }

  function askDeleteConfirmation(cityName: string) {
    return Alert.alert('Remove from favorites?', null, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'Confirm', onPress: () => removeCityFromFavs(cityName)},
    ]);
  }

  function removeCityFromFavs(cityName: string) {
    removeFromFavs(cityName);
  }

  function toggleEditMode() {
    setIsEditMode(!isEditMode);
  }

  function renderCityCard({item}) {
    return (
      <CityCard
        data={item}
        editMode={isEditMode}
        onCardPress={() => selectCity(item)}
        onRemovePress={() => askDeleteConfirmation(item.name)}
      />
    );
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
    <SafeAreaView style={styles.container}>
      {favoriteCities.length > 0 && (
        <View style={styles.removeBtnContainer}>
          <IconBtn
            name={isEditMode ? 'save' : 'edit'}
            onPress={toggleEditMode}
          />
        </View>
      )}
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
            onPress={() => selectCityFromModal(city)}>
            {city.name}
          </IconTextBtn>
        ))}
      </AppModal>
    </SafeAreaView>
  );
};

export default Home;
