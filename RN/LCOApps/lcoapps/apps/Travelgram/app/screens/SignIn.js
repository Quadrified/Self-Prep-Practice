import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Text, Container, Form, Item, Input, Button, H3 } from 'native-base';

import propTypes from 'prop-types';
import { signIn } from '../action/auth';
import { connect } from 'react-redux';

import Welcome from '../assets/Welcome.png';

const SignIn = ({ signIn, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    console.log({ email, password });
    signIn({ email, password });
  };

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <H3 style={styles.heading}>Welcome to the Travelgram Social App</H3>

        <Image
          source={Welcome}
          style={{ width: null, height: 150, marginTop: 30 }}
          resizeMode="contain"
        />

        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="enter your registerd email"
              value={email}
              style={{ color: '#eee' }}
              onChangeText={(text) => setEmail(text)}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="enter your registerd password"
              value={password}
              secureTextEntry={true}
              style={{ color: '#eee' }}
              onChangeText={(text) => setPassword(text)}
            />
          </Item>
          <Button rounded block onPress={onSignIn}>
            <Text>SignIn</Text>
          </Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{ marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>
              Do not have an account, SignUp here
            </Text>
          </TouchableOpacity>
        </Form>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#fdcb9e',
    marginHorizontal: 5,
    marginTop: 30,
  },
  formItem: {
    marginBottom: 20,
  },
});

SignIn.propTypes = {
  signIn: propTypes.func.isRequired,
};

const mapDispatchToProps = {
  signIn: (data) => signIn(data),
};

export default connect(null, mapDispatchToProps)(SignIn);
