import {FlatList, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  getCoordsListFromCityName,
  getWeatherFromCoords,
} from '../../networking';

import AppModal from '../../components/organisms/modal';
import {HomePropTypes} from './Home.types';
import CityCard from '../../components/organisms/city-card';
import IconTextBtn from '../../components/molecules/icon-text-btn';
import IconBtn from '../../components/molecules/icon-btn';
import Nav from '../../components/nav';
import TextField from '../../components/atoms/text-field';
import Typography from '../../components/atoms/typography';
import styles from './Home.styles';
import {useDebounce} from 'use-debounce';

const Home: React.FC<HomePropTypes> = ({
  navigation,
  favoriteCities,
  updateFavWeather,
  setCurrentWeather,
  removeFromFavs,
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isFilterMode, setIsFilterMode] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [cityInput, setCityInput] = useState<string>('');
  const [debouncedInput] = useDebounce(cityInput, 300);
  const [filterInput, setFilterInput] = useState<string>('');
  const [debouncedFilterInput] = useDebounce(filterInput, 100);
  const [citiesOptions, setCitiesOptions] = useState<[]>([]);
  const [citiesToRender, setCitiesToRender] = useState<[]>(favoriteCities);

  const navButtons = [
    {
      name: 'home',
      onPress: () => {},
    },
    {
      name: 'search',
      onPress: () => {
        setIsFilterMode(!isFilterMode);
        setCitiesToRender(favoriteCities);
        setFilterInput('');
      },
    },
    {
      name: 'location',
      onPress: () => {},
    },
  ];

  const openModal = () => {
    setIsModalVisible(true);
  };

  const selectCity = async chosenCity => {
    const weather = await getWeatherFromCoords(chosenCity.lat, chosenCity.lon);
    setCurrentWeather(weather, chosenCity.name);
    navigation.navigate('CityDetail');
  };

  const selectCityFromModal = chosenCity => {
    selectCity(chosenCity);
    setIsModalVisible(false);
    setCityInput('');
    setCitiesOptions([]);
  };

  const askDeleteConfirmation = (cityName: string) => {
    return Alert.alert('Remove from favorites?', null, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'Confirm', onPress: () => removeCityFromFavs(cityName)},
    ]);
  };

  const removeCityFromFavs = (cityName: string) => {
    removeFromFavs(cityName);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const renderCityCard = ({item}) => {
    return (
      <CityCard
        data={item}
        editMode={isEditMode}
        onCardPress={() => selectCity(item)}
        onRemovePress={() => askDeleteConfirmation(item.name)}
      />
    );
  };

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
      const getCities = async input => {
        const results = await getCoordsListFromCityName(input);
        setCitiesOptions(results.filter(city => city.country === 'IT'));
      };
      getCities(debouncedInput);
    }
  }, [debouncedInput]);

  useEffect(() => {
    if (debouncedFilterInput) {
      const filteredCities = favoriteCities.filter(city =>
        city.name.includes(debouncedFilterInput),
      );
      setCitiesToRender(filteredCities);
    } else {
      setCitiesToRender(favoriteCities);
    }
  }, [debouncedFilterInput, favoriteCities]);

  return (
    <View style={styles.container}>
      {citiesToRender.length > 0 && (
        <View style={styles.editBtnContainer}>
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
      <View style={styles.buttonSearchContainer}>
        {isFilterMode ? (
          <TextField value={filterInput} onChange={setFilterInput} />
        ) : (
          <IconTextBtn icon="add" onPress={openModal}>
            Add city
          </IconTextBtn>
        )}
      </View>
      <FlatList
        data={citiesToRender}
        renderItem={renderCityCard}
        keyExtractor={item => item.name}
        style={styles.cardsContainer}
      />
      <Nav buttons={navButtons} />
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
    </View>
  );
};

export default Home;
