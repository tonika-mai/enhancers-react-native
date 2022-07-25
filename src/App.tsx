/**
 * @format
 */

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import React from 'react';
import {StatusBar} from 'react-native';
import connectedCityDetail from './screens/city-detail';
import connectedHome from './screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import store from './redux';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={connectedHome} />
          <Stack.Screen name="CityDetail" component={connectedCityDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
