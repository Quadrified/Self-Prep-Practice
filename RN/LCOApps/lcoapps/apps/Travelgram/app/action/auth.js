// Auth actions
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';

export const signUp = (data) => async (dispatch) => {
  console.log(data);
  const {
    name,
    instaUsername,
    bio,
    email,
    password,
    country,
    profileImage,
  } = data;

  // creating user
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(data);
      console.log('Created user successfully!');

      // Saving user info after user created
      database()
        .ref('/users/' + data.user.uid)
        .set({
          name,
          instaUsername,
          country,
          bio,
          profileImage,
          uid: data.user.uid,
        })
        .then(() => console.log('Data set successfully!'));
      Snackbar.show({
        text: 'Account created',
        textColor: '#FFF',
        backgroundColor: '#1B262c',
      });
    })
    .catch((error) => {
      console.error(error);
      Snackbar.show({
        text: 'Sign up failed',
        textColor: '#FFF',
        backgroundColor: 'Maroon',
      });
    });
};

export const signIn = (data) => async (dispatch) => {
  console.log(data);
  const { email, password } = data;

  // signing user in
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Sign in successful!');
      Snackbar.show({
        text: 'Sign in successful',
        textColor: '#FFF',
        backgroundColor: '#1B262C',
      });
    })
    .catch((error) => {
      console.error(error);
      Snackbar.show({
        text: 'Sign in failed',
        textColor: '#FFF',
        backgroundColor: 'Maroon',
      });
    });
};

export const signOut = () => async (dispatch) => {
  // signing user out
  auth()
    .signOut()
    .then(() => {
      console.log('Sign in successful!');
      Snackbar.show({
        text: 'Sign out successful',
        textColor: '#FFF',
        backgroundColor: '#1B262C',
      });
    })
    .catch((error) => {
      console.error(error);
      Snackbar.show({
        text: 'Sign out failed',
        textColor: '#FFF',
        backgroundColor: 'Maroon',
      });
    });
};
