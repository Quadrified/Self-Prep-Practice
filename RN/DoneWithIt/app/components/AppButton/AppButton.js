import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../configs/colors';
import styles from './styles';

function AppButton({title, onPress, style}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
