/**
 * 7th App
 * The InstagramClone app teaches to understand a whole workflow of an app in React Native.
 * Learning about Firebase - Signup, Sihgnin, Images, database.
 * Camera library used => React-native-camera :  https://github.com/react-native-camera/react-native-camera
 * React Navigation : https://reactnavigation.org/docs/getting-started
 * Native base : https://github.com/GeekyAnts/NativeBase
 * Snackbar - https://github.com/cooperka/react-native-snackbar
 * React-native-storage: https://github.com/sunnylqm/react-native-storage#readme
 * shortid : https://github.com/dylang/shortid#readme => for generating unique ID
 */

import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Navigation && Screens
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddPost from './screens/AddPost';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

// Firebase
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// Redux
import { connect, useDispatch } from 'react-redux';
import { SET_USER, IS_AUTHENTICATED } from './action/action.types';

// Components
import CustomHeader from './components/layout/CustomHeader';
import EmptyContainer from './components/EmptyContainer';

// Utils
import { requestPermission } from './Utils/AskPermission';

const Stack = createStackNavigator();

function InstagramClone({ authState }) {
  // Dispatch for redux
  const dispatch = useDispatch();

  // Subscriber ceration
  const onAuthStateChanged = (user) => {
    if (user) {
      // If user exists
      dispatch({
        type: IS_AUTHENTICATED,
        payload: true,
      });

      console.log(user._user.uid);

      database()
        .ref(`/users/${user._user.uid}`)
        .on('value', (snapshot) => {
          console.log('User details: ' + snapshot.val());

          dispatch({
            type: SET_USER,
            payload: snapshot.val(),
          });
        });
    } else {
      dispatch({
        type: IS_AUTHENTICATED,
        payload: false,
      });
    }
  };

  useEffect(() => {
    requestPermission();
    // Subscriber creation syntax
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  if (authState.loading) {
    return <EmptyContainer />;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <CustomHeader {...props} />,
          }}>
          {authState.isAuthenticated ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AddPost" component={AddPost} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="SignIn" component={SignIn} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const mapStateToProps = (state) => ({
  authState: state.auth,
});

export default connect(mapStateToProps)(InstagramClone);
