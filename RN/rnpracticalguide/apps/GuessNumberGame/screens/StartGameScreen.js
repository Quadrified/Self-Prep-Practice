import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import AppColors from '../themes/AppColors';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmedNumber, setConfirmedNumber] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('initialState');

  const numberInputHandler = input => {
    setEnteredValue(input.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmedNumber(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber >= 99) {
      return;
    }
    setConfirmedNumber(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
  };

  if (confirmedNumber) {
    const confirmedOutput = <Text>{selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Start an new game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a number!</Text>
          <Input
            style={styles.input}
            autoCapitalize="none"
            autoConnect={false}
            keyboardType="number-pad"
            maxLength={2}
            blurOnSubmit
            onChangeText={input => numberInputHandler(input)}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => resetInputHandler()}>
              <Text style={styles.resetButton}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => confirmInputHandler()}>
              <Text style={styles.confirmButton}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: AppColors.background,
  },
  mainTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    alignItems: 'center',
    width: '80%',
    backgroundColor: AppColors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  resetButton: {
    width: '100%',
    backgroundColor: AppColors.accent,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: AppColors.light,
    textAlign: 'center',
  },
  confirmButton: {
    width: '100%',
    backgroundColor: AppColors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: AppColors.light,
    textAlign: 'center',
  },
  input: {
    width: 70,
    padding: 5,
    margin: 5,
    textAlign: 'center',
  },
});

export default StartGameScreen;
