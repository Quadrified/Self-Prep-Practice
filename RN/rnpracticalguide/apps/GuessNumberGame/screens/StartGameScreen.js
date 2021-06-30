import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/Card';
import AppColors from '../themes/AppColors';

const StartGameScreen = props => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Start an new game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number!</Text>
          <TextInput
            placeholder="Enter here..."
            placeholderTextColor="#CECECE"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.resetButton}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.confirmButton}>Confirm</Text>
            </TouchableOpacity>
          </View>
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
});

export default StartGameScreen;
