import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
      }}>
      <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  );
};

export default App;
