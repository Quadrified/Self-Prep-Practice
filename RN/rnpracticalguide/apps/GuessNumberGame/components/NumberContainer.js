import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import AppColors from '../themes/AppColors';

const NumberContainer = ({ children }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.number}>{children}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: AppColors.accent,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: AppColors.accent,
    fontSize: 24,
  },
});

export default NumberContainer;
