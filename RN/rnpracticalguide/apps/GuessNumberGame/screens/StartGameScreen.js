import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import AppColors from '../themes/AppColors';

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmedNumber, setConfirmedNumber] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('initialState');
  let confirmedOutput;

  const numberInputHandler = input => {
    setEnteredValue(input.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmedNumber(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert('Invalid number entered', 'Enter a number between 1 and 99', [
        {
          text: 'Okay!',
          style: 'destructive',
          onPress: resetInputHandler,
        },
      ]);
    }
    setConfirmedNumber(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  if (confirmedNumber) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>
          <Text>{selectedNumber}</Text>
        </NumberContainer>
        <TouchableOpacity onPress={() => onStartGame(selectedNumber)}>
          <Text
            style={{
              fontSize: 16,
              color: AppColors.primary,
              textTransform: 'uppercase',
              padding: 15,
              borderRadius: 10,
              backgroundColor: AppColors.primary,
              color: AppColors.white,
            }}>
            Start Game!
          </Text>
        </TouchableOpacity>
      </Card>
    );
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
  summaryContainer: {
    margin: 20,
    width: '50%',
    alignItems: 'center',
    backgroundColor: AppColors.white,
  },
});

export default StartGameScreen;
