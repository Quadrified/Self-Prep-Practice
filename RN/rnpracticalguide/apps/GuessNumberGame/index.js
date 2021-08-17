import React, { useState } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import AppColors from './themes/AppColors';

const GuessNumber = props => {
  const [selectedUserNumber, setSelectedUserNumber] = useState();
  const [guesses, setGuesses] = useState(0);
  const resetGameToNew = () => {
    setGuesses(0);
    setSelectedUserNumber(null);
  };

  const startGameHandler = input => {
    setSelectedUserNumber(input);
  };

  const gameOverHandler = guess => {
    setGuesses(guess);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (selectedUserNumber && guesses <= 0) {
    content = (
      <GameScreen
        userChoice={selectedUserNumber}
        onGameOver={gameOverHandler}
      />
    );
  } else if (guesses > 0) {
    content = (
      <GameOverScreen
        numberOfGuesses={guesses}
        userNumber={selectedUserNumber}
        resetGame={resetGameToNew}
      />
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.primary} />
      <View style={styles.container}>
        <Header title="Guess A Number" />
        {content}
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
