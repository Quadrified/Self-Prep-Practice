import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { connect, useDispatch } from 'react-redux';
import { SET_USER, IS_AUTHENTICATED } from './action/action.types';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import AddPost from './screens/AddPost';

import Header from './components/layout/CustomHeader';
import LoadingContainer from './components/EmptyContainer';

import { requestPermission } from './utils/requestPermisions';

const Stack = createStackNavigator();

function Travelgram({ authState }) {
  const dispatch = useDispatch();

  const onAuthStateChange = (user) => {
    if (user) {
      dispatch({
        type: IS_AUTHENTICATED,
        payload: true,
      });

      console.log(user._user.uid); // gives us the user ID

      database()
        .ref(`/users/${user._user.uid}`)
        .on('value', (snapshot) => {
          console.log('USER DEETS: ', snapshot.val());
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
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);

    return subscriber;
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.container?.backgroundColor}
      />
      <View style={styles.container}>
        <Text>Travelgram</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default Travelgram;
