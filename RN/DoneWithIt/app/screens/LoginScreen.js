import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import colors from '../configs/colors';
import * as Yup from 'yup';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).max(5).label('Password'),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <AppFormField
          name="password"
          icon="form-textbox-password"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        <AppSubmitButton title="Login" style={styles.button} />
      </AppForm>
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
