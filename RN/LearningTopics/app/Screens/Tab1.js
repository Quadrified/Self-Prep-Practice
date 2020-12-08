import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Tab1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Screen 1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
