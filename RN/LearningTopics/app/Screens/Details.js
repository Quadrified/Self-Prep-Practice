import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Details extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text> {this.props.route.params.screenName} </Text>
        <Button
          title="View Bottom Tabs"
          onPress={() =>
            this.props.navigation.navigate('Bottom Tabs', {name: 'Omer Quadri'})
          }
        />
        <Button
          title="View Top Tabs"
          onPress={() =>
            this.props.navigation.navigate('Top Tabs', {name: 'Omer Quadri'})
          }
        />
        <Button
          title="Pass data back"
          onPress={() =>
            this.props.navigation.navigate('Feed', {data: 'Omer Quadri'})
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
