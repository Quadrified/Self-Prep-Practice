import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../configs/colors';
import styles from './styles';

function AppButton(props) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[props.color]}]}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
