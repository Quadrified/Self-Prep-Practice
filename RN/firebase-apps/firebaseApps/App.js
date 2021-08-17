import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import FirebaseAuthentication from './apps/Authentication/FirebaseAuthentication';
import auth from '@react-native-firebase/auth';

const App = props => {
  return <FirebaseAuthentication />;
};

export default App;
