import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AppButton from '../app/components/AppButton';
import AppTextInput from '../app/components/AppTextInput';
import Screen from '../app/components/Screen';

export default class LoginScreenClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      pwd: '',
    };
  }

  setEmail = (email) => {
    this.setState({email});
  };

  setPassword = (pwd) => {
    this.setState({pwd});
  };

  onLogin = () => {
    const {email, pwd} = this.state;
    console.log(email, pwd);
  };
  render() {
    return (
      <Screen>
        <AppTextInput
          placeholder="Email"
          onChangeText={(email) => this.setEmail(email)}
        />
        <AppTextInput
          placeholder="Password"
          onChangeText={(password) => this.setPassword(password)}
          secureTextEntry
        />
        <AppButton title="Login" onPress={this.onLogin} />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
