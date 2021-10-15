import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import Axios from 'axios';
import { Button, Spinner, Container } from 'native-base';
import ChuckNorrisJokes from './components/ChuckNorrisJokes';

// const key = '212';
// const URL = `https://randomuser.me/api/${key}/params`;
// const URL = `https://api.github.com/users/${key}`;

function ChuckAPI(props) {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(
        'https://api.chucknorris.io/jokes/random',
      );
      const jokeDetails = data;
      console.log(jokeDetails);

      setDetails(jokeDetails);
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
            <ChuckNorrisJokes details={details} />
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

export default ChuckAPI;
