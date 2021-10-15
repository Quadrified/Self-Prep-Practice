import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';

// TODO: Get all apps and make a list of Buttons with app names that navigate to that particular app.

function Default(props) {
  return (
    <>
      <StatusBar backgroundColor="#218F76" />
      <View style={styles.container}>
        <Text style={styles.text}>
          All the apps are in their separate folder.
        </Text>
        <Text style={styles.text}>
          Use their main containers (index.js or AppName.js) inside the App.js
          to run them individually!
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#218F76',
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Default;
