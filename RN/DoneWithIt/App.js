import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  Switch,
  PermissionsAndroid,
  Button,
} from 'react-native';
import * as ImagePicker from 'react-native-image-crop-picker';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import Screen from './app/components/Screen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import ListingItem from './app/components/ListingItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import colors from './app/configs/colors';
import styles from './app/components/AppButton/styles';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

const App = () => {
  const requestPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      // PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Please grant Camera permissions',
        message: 'The App needs access to your camera ',
        buttonNeutral: 'Ask me later',
        buttonNegative: 'Cancel',
        buttonPositive: 'Okay!',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission given');
    } else {
      console.log('Permission Denied');
      // requestPermission();
    }
  };

  // useEffect(() => {
  //   requestPermission();
  //   console.log('Mounted');
  // }, []);

  // const selectImage = () => {
  //   console.log('Pressed');
  // };
  function selectImage() {
    console.log('Pressed');
  }

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
    </Screen>
  );
};

export default App;
