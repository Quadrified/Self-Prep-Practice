import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import GoogleSignInView from './components/GoogleSignInView';

GoogleSignin.configure({
  webClientId:
    '322146943469-bgcjftqce2eepbhu1520uds9hhpfutjk.apps.googleusercontent.com',
});

const GoogleSignIn = props => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isSignedInWithGoogle, setIsSignedInWithGoogle] = useState(false);

  useEffect(() => {
    // Handle user state changes
    const onAuthStateChanged = userInfo => {
      //   console.log('>>>userInfo<<<', userInfo);
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

  const onGoogleSignIn = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(() => {
        setIsSignedInWithGoogle(true);
      });
  };

  const onAnonymousLogin = () => {
    auth()
      .signInAnonymously()
      .then(data => {
        console.log('User signed in anonymously Data<<<', data);
        setIsSignedInWithGoogle(false);
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

  const onGoogleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      onSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          {isSignedInWithGoogle ? (
            <GoogleSignInView userInfo={user} onSignOut={onGoogleSignOut} />
          ) : (
            <View style={styles.onAnonymousLoginContainer}>
              <Text style={styles.text}>
                Welcome you are signed in anonymously with ID:
              </Text>
              <Text style={styles.userID}> {user.uid}</Text>
              <View style={styles.signOutContainer}>
                <Button mode="contained" onPress={onSignOut} color="#E63B2A">
                  Sign out
                </Button>
              </View>
            </View>
          )}
        </>
      ) : (
        <>
          <GoogleSigninButton
            onPress={onGoogleSignIn}
            style={styles.googleSignInContainer}
          />
          <Button mode="contained" onPress={onAnonymousLogin} color="#005A9C">
            Sign in Anonymously
          </Button>
        </>
      )}
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
    fontSize: 16,
    color: '#000',
    margin: 10,
  },
  googleSignInContainer: {
    margin: 10,
    padding: 15,
  },
  onAnonymousLoginContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
  },
  userID: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  signOutContainer: {
    margin: 15,
  },
});
export default GoogleSignIn;
