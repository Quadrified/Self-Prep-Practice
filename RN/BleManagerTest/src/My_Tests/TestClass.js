import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class TestClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({count: count + 1});
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <View>
        <Button onPress={() => this.incrementCount} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
