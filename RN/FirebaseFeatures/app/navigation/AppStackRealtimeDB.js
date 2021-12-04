import React, { useState, useEffect, Fragment } from 'react';
import auth from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import GoogleLoginRDB from '../screens/realtimeDB/GoogleLogin';
import AnonymousLoginRDB from '../screens/realtimeDB/AnonymousLogin';

const Stack = createNativeStackNavigator();

const AppStackRealtimeDB = props => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  useEffect(() => {
    // Handle user state changes
    const onAuthStateChanged = userInfo => {
      console.log('>>>user in AppStackRealtime<<<', userInfo);
      userInfo && setUser(userInfo);
      console.log('>>>user set<<<', user);
      initializing && setInitializing(false);
      console.log('>>is Anonymous<<<', userInfo?.isAnonymous);
      userInfo?.isAnonymous && setIsAnonymous(true);
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [initializing]);

  const renderAuthStack = () => (
    <Fragment key="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Fragment>
  );

  const renderAppStack = () => (
    <Fragment key="App">
      <Stack.Screen name="GoogleLoginRDB" component={GoogleLoginRDB} />
    </Fragment>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {user
          ? [renderAppStack(), renderAuthStack()]
          : [renderAuthStack(), renderAppStack()]}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackRealtimeDB;
