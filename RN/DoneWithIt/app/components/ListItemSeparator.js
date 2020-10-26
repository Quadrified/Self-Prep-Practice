import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../configs/colors';

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.medium,
  },
});
export default ListItemSeparator;
