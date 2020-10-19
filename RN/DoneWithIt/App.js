import React, {Component} from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Platform,
  StatusBar,
} from 'react-native';

class App extends Component {
  onPress = () => {
    Alert.alert('Title', 'Hello', [{text: 'yes'}, {text: 'no'}]);
  };

  onPrompt = () => {
    // ios only
    Alert.prompt('Hello', 'Prompt here!', (text) => console.log(text));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#eee',
              width: 300,
              height: 50,
              margin: 10,
            }}>
            <Text style={styles.text}>Press Here</Text>
          </View>
        </TouchableOpacity>
        {/* <Image source={require('./chan.png')} width={200} height={300} /> */}
        <TouchableNativeFeedback>
          <Image
            blurRadius={2}
            fadeDuration={2000}
            source={{
              width: 200,
              height: 200,
              uri: 'https://picsum.photos/200',
            }}
          />
        </TouchableNativeFeedback>
        {/* <Button title="Click me" color="red" onPress={this.onPrompt} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button: {
    backgroundColor: '#eee',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    margin: 20,
  },
});

export default App;
