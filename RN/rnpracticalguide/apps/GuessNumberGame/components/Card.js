import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <>
      <View style={{ ...styles.inputContainer, ...style }}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    shadowColor: '#005A9C',
    elevation: 10,
    padding: 20,
    borderRadius: 15,
  },
});

export default Card;
