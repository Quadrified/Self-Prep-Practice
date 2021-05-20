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
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppPicker from './app/components/AppPicker';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { color } from 'react-native-reanimated';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppTabNavigator from './app/navigation/AppTabNavigator';

const LinkButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Go to Tweet Details"
      onPress={() => navigation.navigate('Tweet Details')}
    />
  );
};

const Tweet = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="Go to Tweet Details"
      onPress={() => navigation.navigate('TweetDetails', { id: 102910 })}
    />
  </Screen>
);
const Account = ({ navigation }) => (
  <Screen>
    <Text>Account</Text>
    <Button
      title="Go to Feed"
      onPress={() => navigation.navigate('Feed', { id: 102910 })}
    />
  </Screen>
);

const TweetDetails = ({ navigation, route }) => (
  <Screen>
    <Text>Tweet Details with id: {route.params.id}</Text>
    <Button title="Go to tweets" onPress={() => navigation.navigate('Feed')} />
  </Screen>
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: 'lightgray',
      inactiveTintColor: 'black',
    }}>
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'dodgerblue' },
      headerTintColor: 'white',
    }}>
    <Stack.Screen name="Tweet" component={Tweet} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={
        {
          headerStyle: { backgroundColor: 'tomato' },
          headerTintColor: 'white',
        }
        //   ({ route }) => ({
        //   title: route.params.id,
        // })
      }
    />
  </Stack.Navigator>
);

const App = () => {
  console.clear();
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppTabNavigator />
    </NavigationContainer>
  );
};

export default App;
