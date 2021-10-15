/**
 * 4th App
 * Deals with taking input from user.
 * Error handling with input from user using 3rd party library.
 * More about UI and Flexbox.
 * 3rd party library used: Snackbar - https://github.com/cooperka/react-native-snackbar
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

function CurrencyConverter(props) {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Please provide a value!',
        backgroundColor: '#EA7773',
        textColor: '#000',
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
    // setInputValue(0);
  };

  const resetAll = () => {
    setResultValue(0);
    setInputValue(0);
  };

  return (
    <>
      <StatusBar backgroundColor="#1B262C" />
      <ScrollView
        backgroundColor="#1B262C"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <Text style={styles.heading}>Currency Converter</Text>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter a value to convert.."
              placeholderTextColor="#C1C1C1"
              value={inputValue}
              onChangeText={(input) => setInputValue(input)}
            />
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map((currency) => (
              <TouchableOpacity
                key={currency}
                style={styles.converterButton}
                onPress={() => buttonPressed(currency)}>
                <Text style={styles.currencyText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B262C',
  },
  heading: {
    fontSize: 30,
    color: '#FFF',
    alignSelf: 'center',
    marginTop: 30,
  },
  resultContainer: {
    height: 70,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BBE1FA',
    borderWidth: 2,
  },
  resultValue: {
    fontSize: 24,
    color: '#FFF',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#BBE1FA',
  },
  input: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
    color: '#FFF',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#BBE1FA',
    marginTop: 10,
    backgroundColor: '#0F4C75',
    borderRadius: 5,
  },
  currencyText: {
    color: '#FFF',
    fontSize: 15,
  },
  resetContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    width: '100%',
  },
  resetButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#BBE1FA',
    marginTop: 10,
    backgroundColor: '#0F4C75',
    borderRadius: 5,
  },
});

export default CurrencyConverter;
