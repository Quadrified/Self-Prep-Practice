import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  Switch,
} from 'react-native';

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

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);

  const categories = [
    {
      label: 'Furniture',
      value: 1,
    },
    {
      label: 'Clothings',
      value: 2,
    },
    {
      label: 'Camera',
      value: 3,
    },
  ];

  const [category, setCategory] = useState(categories[0]);

  return <LoginScreen />;
};

export default App;
