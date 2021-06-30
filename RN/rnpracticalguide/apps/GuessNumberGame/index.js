import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import AppColors from './themes/AppColors';

const GuessNumber = props => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.primary} />
      <View style={styles.container}>
        <Header title="Guess A Number" />
        <StartGameScreen />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
});

export default GuessNumber;
