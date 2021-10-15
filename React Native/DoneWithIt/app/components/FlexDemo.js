import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function FlexDemo() {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#000'}} />
    </View>
  );
}

const styles = StyleSheet.create({});
