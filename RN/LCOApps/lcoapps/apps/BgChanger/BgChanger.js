/**
 * 1st App
 * The BgChanger app generated random color for the background on tap on a button.
 * There is also a button that resets the background color to Black
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

function BgChanger(props) {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBackground = () => {
    let color =
      'rgb( ' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  const resetBackground = () => {
    resetColor = 'rgb(0, 0, 0)';
    setRandomColor('#000');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <TouchableOpacity onPress={changeBackground}>
          <Text style={styles.text}>Change Background Color</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetBackground}>
          <Text style={[styles.text, { marginTop: 20 }]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});

export default BgChanger;
