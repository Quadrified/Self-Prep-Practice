import React from 'react';
import { Body, Right, Button, Icon, Title, Text, Header } from 'native-base';

import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { signOut } from '../../action/auth';

function CustomHeader({ signOut, authState, navigation }) {
  return (
    <>
      <Header
        androidStatusBarColor="#0F4C75"
        style={{
          backgroundColor: '#0F4C75',
        }}>
        <Body>
          <Title>Instagram Clone</Title>
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
                <Icon name="log-out-outline" style={{ color: 'red' }} />
              </Button>
            </>
          )}
        </Right>
      </Header>
    </>
  );
}

const mapStateToProps = (state) => ({
  authState: state.auth,
});

const mapDispatchToProps = {
  signOut,
};

CustomHeader.propTypes = {
  signOut: propTypes.func.isRequired,
  authState: propTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
