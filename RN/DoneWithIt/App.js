import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  Switch,
  PermissionsAndroid,
  Button,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AppPicker from './app/components/AppPicker';
import ImageInput from './app/components/ImageInput';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const App = () => {
  return (
    <>
      <ImageInput />
    </>
  );
};

export default App;
