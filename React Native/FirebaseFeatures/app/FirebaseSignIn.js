import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native-paper';

const FirebaseSignIn = props => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    // Handle user state changes
    const onAuthStateChanged = userInfo => {
      console.log('>>>userInfo<<<', userInfo);
      setUser(userInfo);
      if (initializing) {
        setInitializing(false);
      }
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [initializing]);

  if (initializing) {
    return <Text>Loading...</Text>;
  }

  const onAnonymousLogin = () => {
    auth()
      .signInAnonymously()
      .then(data => {
        console.log('User signed in anonymously');
        console.log('>>>anonymous Data<<<', data);
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Button mode="contained" onPress={onAnonymousLogin} color="#005A9C">
          Login
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.uid}</Text>
      <Button mode="contained" onPress={onSignOut} color="#005A9C">
        Sign out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    color: '#000',
    margin: 10,
  },
});
export default FirebaseSignIn;
