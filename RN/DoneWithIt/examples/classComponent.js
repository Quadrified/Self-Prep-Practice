import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Button} from 'react-native';

let globalVal;
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Initial Value',
    };
  }

  onChangeText = (text) => {
    this.globalVal = text;
  };

  onShowText = () => {
    this.setState({value: this.globalVal});
  };

  render() {
    return (
      <View>
        <Text numberOfLines={1}> {this.state.value} </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.onChangeText(text)}
          placeholder="Type anything..."
          maxLength={1}
        />
        <TouchableOpacity>
          <Button title="Press to see value" onPress={this.onShowText} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ClassComponent;
