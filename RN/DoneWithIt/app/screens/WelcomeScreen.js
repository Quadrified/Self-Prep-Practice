import React, {Component} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../configs/colors';
import AppButton from '../components/AppButton';

class WelcomeScreen extends Component {
  onPress = () => {
    console.log('Tapped on HS');
  };

  render() {
    return (
      <ImageBackground
        blurRadius={3}
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/logo-red.png')}
          />
          <Text style={styles.tagLine}>Sell what you don't need!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton title="Login" onPress={this.onPress} color="primary" />
          <AppButton
            title="Register"
            onPress={this.onPress}
            color="secondary"
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    bottom: 20,
  },
  tagLine: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    fontFamily: 'Roboto',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
});

export default WelcomeScreen;
