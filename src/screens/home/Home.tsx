import {Button, FlatList, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

import CityCard from '../../components/organisms/city-card';
import IconTextBtn from '../../components/molecules/icon-text-btn';
import Nav from '../../components/nav';
import Typography from '../../components/atoms/typography';
import AppModal from '../../components/organisms/modal';
import styles from './Home.styles';

const Home: React.FC = ({navigation, favoriteCities}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function renderCityCard({item}) {
    return <CityCard data={item} />;
  }

  function openModal() {
    setIsModalVisible(true);
  }

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
        keyExtractor={item => item.cityName}
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
