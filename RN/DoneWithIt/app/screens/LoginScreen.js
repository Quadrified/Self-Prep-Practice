import React from 'react';
import {StyleSheet, Image} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import colors from '../configs/colors';
import {Formik} from 'formik';

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log(values)}>
        {({handleChange, handleSubmit}) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
            />

            <AppTextInput
              icon="form-textbox-password"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={handleChange('password')}
            />

            <AppButton
              title="Login"
              style={styles.button}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  button: {
    backgroundColor: colors.primary,
  },
});

export default LoginScreen;
