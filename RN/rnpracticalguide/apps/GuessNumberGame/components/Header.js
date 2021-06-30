import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppColors from '../themes/AppColors';

const Header = ({ title }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    backgroundColor: AppColors.primary,
  },
  title: {
    color: AppColors.light,
    fontSize: 18,
  },
});

export default Header;
