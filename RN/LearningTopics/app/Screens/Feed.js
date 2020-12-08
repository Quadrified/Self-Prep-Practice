import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Feed extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text> Navigation Drawer </Text>
        <Button
          style={{width: '100%'}}
          title="Go to Feed Item"
          onPress={() =>
            this.props.navigation.navigate('Details', {
              screenName: 'My Details Screen',
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
