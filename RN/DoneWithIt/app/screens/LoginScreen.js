import React from 'react';
import {Formik} from 'formik';
import {Image, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import colors from '../configs/colors';
import * as Yup from 'yup';
import AppText from '../components/AppText';
import AppErrorMessage from '../components/AppErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).max(5).label('Password'),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            <AppErrorMessage error={errors.email} visible={touched.email} />

            <AppTextInput
              icon="form-textbox-password"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            <AppErrorMessage
              error={errors.password}
              visible={touched.password}
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
