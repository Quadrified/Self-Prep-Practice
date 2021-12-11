import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import MainPage from './MainPage';
// import TokScreen from './TokBoxScreen';

const AppStack = createStackNavigator(
  {
    MainPage: {
      screen: MainPage,
      navigationOptions: {
        headerShown: false,
      },
      path: 'tokbox/mainpage',
    },
  },
  {
    initialRouteName: 'MainPage',
  },
);

const AppContainer = createAppContainer(AppStack);

export default () => {
  const prefix = 'https://';
  return <AppContainer uriPrefix={prefix} />;
};
