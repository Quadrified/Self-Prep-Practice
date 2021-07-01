import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import AppColors from '../themes/AppColors';

const Input = ({ style, ...restProps }) => {
  return (
    <>
      <TextInput {...restProps} style={{ ...styles.input, ...style }} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.gray,
    color: AppColors.dark,
  },
});

export default Input;
