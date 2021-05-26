import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Body, Right, Button, Icon, Title, Text, Header } from 'native-base';

import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { signOut } from '../../action/auth';

const CustomHeader = ({ signOut, authState, navigation }) => {
  return (
    <>
      <Header
        androidStatusBarColor="#0F4C75"
        style={{ backgroundColor: '#0F4C75' }}>
        <Body>
          <Title>Travelgram</Title>
        </Body>
        <Right>
          {authState.isAuthenticated && (
            <>
              <Button
                transparent
                iconLeft
                onPress={() => navigation.navigate('AddPost')}>
                <Text style={{ color: '#FDCB9E' }}>Add Post</Text>
              </Button>
              <Button transparent onPress={() => signOut()}>
                <Icon name="log-out-outline" style={{ color: 'crimson' }} />
              </Button>
            </>
          )}
        </Right>
      </Header>
    </>
  );
};

CustomHeader.propTypes = {
  signOut: propTypes.func.isRequired,
  authState: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.auth,
});

const mapDispatchToProps = (state) => ({
  signOut,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
