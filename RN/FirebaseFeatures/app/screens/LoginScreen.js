import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import database, { firebase } from '@react-native-firebase/database';
import { Button } from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

// ClentType: 3 in google-services.json/client/oauth
GoogleSignin.configure({
  webClientId:
    '322146943469-bgcjftqce2eepbhu1520uds9hhpfutjk.apps.googleusercontent.com',
});

const LoginScreen = ({ navigation }) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [signedInData, setSignedInData] = useState(null);

  useEffect(() => {
    // Handle user state changes
    const onAuthStateChanged = userInfo => {
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
      .then(signInData => {
        console.log('>>>Google Sign In Data<<<', signInData.user);
        const userID = signInData.user.uid;
        // const database = firebase
        //   .app()
        //   .database(
        //     'https://fir-tests-e77ff-default-rtdb.asia-southeast1.firebasedatabase.app/',
        //   )
        //   .ref('/users/' + userID)
        //   .set({
        //     name: Math.random().toString(36).substring(7),
        //     age: Math.floor(Math.random() * 50),
        //     uid: userID,
        //     tiles: [
        //       {
        //         tileTitle: 'Facebook',
        //         link: [
        //           {
        //             title: 'First Link',
        //             desc: 'Desc of link',
        //             link: 'abc.co',
        //           },
        //           {
        //             title: 'Second Link',
        //             desc: 'Desc of link',
        //             link: 'f.co',
        //           },
        //         ],
        //       },
        //     ],
        //   })
        //   .then(data => {
        //     console.log('Data set successfully!', data);
        //     setSignedInData(signInData.user);
        //     setIsSignedInWithGoogle(true);
        //   });
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'GoogleLoginRDB',
              params: { userData: JSON.stringify(signInData.user) },
            },
          ],
        });
      });
  };

  const onAnonymousLogin = () => {
    auth()
      .signInAnonymously()
      .then(signInData => {
        const userID = signInData.user.uid;
        // const database = firebase
        //   .app()
        //   .database(
        //     'https://fir-tests-e77ff-default-rtdb.asia-southeast1.firebasedatabase.app/',
        //   )
        //   .ref('/users/' + userID)
        //   .set({
        //     name: Math.random().toString(36).substring(7),
        //     age: Math.floor(Math.random() * 50),
        //     uid: userID,
        //     tiles: [
        //       {
        //         tileTitle: 'Facebook',
        //         link: [
        //           {
        //             title: 'First Link',
        //             desc: 'Desc of link',
        //             link: 'abc.co',
        //           },
        //           {
        //             title: 'Second Link',
        //             desc: 'Desc of link',
        //             link: 'f.co',
        //           },
        //         ],
        //       },
        //     ],
        //   })
        //   .then(data => {
        //     console.log('Data set successfully!', data);
        //   });
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'GoogleLoginRDB',
              params: { userData: JSON.stringify(signInData.user) },
            },
          ],
        });
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        onPress={onGoogleSignIn}
        style={styles.googleSignInContainer}
      />
      <Button mode="outlined" onPress={onAnonymousLogin} color="#005A9C">
        Continue without signing in
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
export default LoginScreen;
