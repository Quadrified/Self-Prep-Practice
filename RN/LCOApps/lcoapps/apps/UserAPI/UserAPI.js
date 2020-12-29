/**
 * 8th App
 * The UserAPI app teaches to understand working with APIs in React Native.
 * Teaches Handling web requests
 * Our URL => URL = `https://randomuser.me/api/${key}/params`
 * Axios : https://github.com/axios/axios
 * MomentJS:  https://momentjs.com/
 * React Navigation : https://reactnavigation.org/docs/getting-started
 * Native base : https://github.com/GeekyAnts/NativeBase
 * Snackbar - https://github.com/cooperka/react-native-snackbar
 */

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import User from './components/User';

import Axios from 'axios';
import { Button, Spinner, Container } from 'native-base';

// const key = '212';
// const URL = `https://randomuser.me/api/${key}/params`;

function UserAPI(props) {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get('https://randomuser.me/api/');
      const details = data.results[0];

      setDetails(details);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#222831" />
      {!details ? (
        <Container style={styles.container}>
          <Spinner color="#00B7C2" />
        </Container>
      ) : (
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <User details={details} />
            <View style={styles.detailsContainer}>
              <Button
                rounded
                style={styles.button}
                onPress={() => fetchDetails()}>
                <Text style={{ color: '#EEE' }}>New User</Text>
              </Button>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserAPI;
