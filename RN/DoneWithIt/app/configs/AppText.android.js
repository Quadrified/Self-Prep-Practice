import React from 'react';
import {Text, StyleSheet} from 'react-native';

const AppText = (props) => {
  console.log(props);
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 40,
    fontFamily: 'Avenir',
  },
});

export default AppText;
