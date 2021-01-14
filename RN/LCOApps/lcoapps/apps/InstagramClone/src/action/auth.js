import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';

export const signUp = (data) => async (dispatch) => {
  console.log(data);
  const { name, instaUsername, bio, email, password, country, image } = data;

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log('User created');
      console.log(data);

      // adding user to database
      database()
        .ref('/users/ ' + data.user.uid)
        .set({
          name,
          instaUsername,
          country,
          image,
          bio,
          uid: data.user.uid,
        })
        .then(() => console.log('Data saved successfully!'));

      Snackbar.show({
        text: 'Account created',
        textColor: '#FFF',
        backgroundColor: '#1B262C',
      });
    })
    .catch((error) => {
      console.error(error);
      Snackbar.show({
        text: 'Signup failed!',
        textColor: '#FFF',
        backgroundColor: 'crimson',
      });
    });
};

export const signIn = (data) => async (dispatch) => {
  console.log(data);
  const { email, password } = data;

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signin successful!');
      Snackbar.show({
        text: 'Account signed in',
        textColor: '#FFF',
        backgroundColor: '#1B262C',
      });
    })
    .catch((error) => {
      console.error(error);
      Snackbar.show({
        text: 'Signin failed!',
        textColor: '#FFF',
        backgroundColor: 'crimson',
      });
    });
};

export const signOut = () => async (dispatch) => {
  auth()
    .signOut()
    .then(() => {
      console.log('Signed out successfullt!');
      Snackbar.show({
        text: 'Signed out!',
        textColor: '#FFF',
        backgroundColor: '#1B262C',
      });
    })
    .catch((error) => {
      console.error(error);
      Snackbar.show({
        text: 'Signout failed!',
        textColor: '#FFF',
        backgroundColor: 'crimson',
      });
    });
};
