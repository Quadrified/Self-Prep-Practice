import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 10 : null,
  },
});

export default Screen;
