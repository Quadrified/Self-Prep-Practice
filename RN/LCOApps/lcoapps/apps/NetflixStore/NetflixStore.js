/**
 * 7th App
 * The NetflixStore app teaches to understand Navigation in React Native.
 * Learning about Local Storage.
 * React Navigation : https://reactnavigation.org/docs/getting-started
 * Native base : https://github.com/GeekyAnts/NativeBase
 * Snackbar - https://github.com/cooperka/react-native-snackbar
 * React-native-storage: https://github.com/sunnylqm/react-native-storage#readme
 * shortid : https://github.com/dylang/shortid#readme => for generating unique ID
 */

import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import Add from './Screens/Add';
import Edit from './Screens/Edit';

const Stack = createStackNavigator();

function NetflixStore(props) {
  return (
    <>
      <StatusBar backgroundColor="#0F4C75" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: '#0F4C75',
              },
              title: 'LCO Netflix Store',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00B7C2',
              },
            }}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={{
              headerStyle: {
                backgroundColor: '#0F4C75',
              },
              title: 'LCO Netflix Store',
              headerTitleStyle: {
                textAlign: 'left',
                color: '#00B7C2',
              },
            }}
          />
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{
              headerStyle: {
                backgroundColor: '#0F4C75',
              },
              title: 'LCO Netflix Store',
              headerTitleStyle: {
                textAlign: 'left',
                color: '#00B7C2',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

export default NetflixStore;
