import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AppButton from '../app/components/AppButton';
import AppTextInput from '../app/components/AppTextInput';
import Screen from '../app/components/Screen';

function LoginScreenFn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  onLogin = () => {
    console.log(email, password);
  };
  return (
    <Screen>
      <AppTextInput
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
      />
      <AppTextInput
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
      />
      <AppButton title="Login" onPress={() => onLogin()} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreenFn;
