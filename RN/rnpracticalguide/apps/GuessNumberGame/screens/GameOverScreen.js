import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppColors from '../themes/AppColors';

const GameOverScreen = ({ numberOfGuesses, userNumber, resetGame }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>The Game is over!</Text>
        <Text>The number was: {userNumber}</Text>
        <Text>
          It took you: {numberOfGuesses} rounds to guess the currect number!
        </Text>

        <TouchableOpacity onPress={resetGame}>
          <Text style={styles.button}>Start Over!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  button: {
    fontSize: 16,
    color: AppColors.primary,
    textTransform: 'uppercase',
    padding: 15,
    borderRadius: 10,
    backgroundColor: AppColors.primary,
    color: AppColors.white,
  },
});

export default GameOverScreen;
