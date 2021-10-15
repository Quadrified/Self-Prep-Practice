import React from 'react';
import {StyleSheet, Platform, StatusBar, SafeAreaView} from 'react-native';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.container, style]}> {children} </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
