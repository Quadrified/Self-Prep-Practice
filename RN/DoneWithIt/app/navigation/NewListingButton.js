import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
      <View style={styles.container}>
        <Icon name="plus-circle" color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 1,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 40,
  },
});

export default NewListingButton;
