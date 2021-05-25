import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { Container, Spinner } from 'native-base';

const EmptyContainer = (props) => {
  return (
    <>
      <Container style={styles.container}>
        <Spinner />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B262C',
  },
});

export default EmptyContainer;
