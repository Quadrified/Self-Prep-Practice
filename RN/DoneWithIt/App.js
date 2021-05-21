import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import AppTabNavigator from './app/navigation/AppTabNavigator';

LogBox.ignoreAllLogs();

const App = () => {
  console.clear();
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppTabNavigator />
    </NavigationContainer>
  );
};

export default App;
