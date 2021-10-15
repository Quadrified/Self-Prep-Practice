import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '402736181395-ha33t42fak93k4dku5d78rjv9noskako.apps.googleusercontent.com',
});

const FirebaseAuthentication = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    console.log('>>>User persist<<<', user);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const onLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  if (!user) {
    console.log('User', user);
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAFAFA',
        }}>
        <View style={{ width: '80%', borderRadius: 50 }}>
          <Button title="Login with Google" onPress={onGoogleButtonPress} />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
      }}>
      <Text>Welcome {user._user.uid} </Text>
      <View style={{ width: '80%', borderRadius: 50 }}>
        <Button title="Logout" onPress={onLogout} />
      </View>
    </View>
  );
};

export default FirebaseAuthentication;
