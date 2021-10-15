import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';

class ViewImageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <Icon name="close" color="#fff" size={30} />
        </View>
        <View style={styles.deleteIcon}>
          <Icon name="trash-can-outline" color="#fff" size={30} />
        </View>
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
    position: 'absolute',
    top: 10,
    left: 15,
  },
  deleteIcon: {
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
