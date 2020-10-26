import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

const App = () => {
  return (
    <MessagesScreen />
  );
};

export default App;
