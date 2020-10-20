import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import colors from '../configs/colors';

class ViewImageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../assets/chair.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 10,
    left: 15,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 10,
    right: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
