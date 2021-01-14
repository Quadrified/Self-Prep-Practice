import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function SignIn(props) {
  return (
    <>
      <View style={styles.container}>
        <Text>SignIn</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignIn;
