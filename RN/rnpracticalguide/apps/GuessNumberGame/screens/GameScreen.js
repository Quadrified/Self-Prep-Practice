import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import AppColors from '../themes/AppColors';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice),
  );
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(numberOfGuesses);
    }
  }, [currentGuess]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setNumberOfGuesses(currentGuesses => currentGuesses + 1);
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Opponent's guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <TouchableOpacity onPress={nextGuessHandler.bind(this, 'lower')}>
            <Text style={styles.button}>Lower</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={nextGuessHandler.bind(this, 'greater')}>
            <Text style={styles.button}>Greater</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
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

export default GameScreen;
