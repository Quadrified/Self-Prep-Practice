import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, TextInput } from 'react-native';

import Axios from 'axios';
import { Button, Spinner, Container } from 'native-base';
import GithubUser from './components/GithubUser';

function GithubAPI(props) {
  const [details, setDetails] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const key = user;
  const URL = `https://api.github.com/users/${key}`;

  const fetchDetails = async () => {
    try {
      // setDetails(null);
      setLoading(true);

      const { data } = await Axios.get(URL);
      console.log(data);
      const details = data;

      setDetails(details);
      setLoading(false);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setUser('quadrified');
    fetchDetails();
  }, []);

  const loadingSpinner = () => (
    <Container style={styles.container}>
      <Spinner color="#00B7C2" />
    </Container>
  );

  return (
    <>
      <StatusBar backgroundColor="#222831" />
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          {loading ? loadingSpinner() : <GithubUser details={details} />}
          <TextInput
            placeholder="Enter your Github username"
            style={styles.input}
            placeholderTextColor="#758283"
            value={user}
            onChangeText={(user) => setUser(user)}
          />
          <View style={styles.detailsContainer}>
            <Button
              rounded
              style={styles.button}
              onPress={() => fetchDetails()}>
              <Text style={{ color: '#EEE' }}>Get my info</Text>
            </Button>
          </View>
        </View>
      </View>
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
  input: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFF',
    padding: 15,
    marginTop: 20,
  },
});

export default GithubAPI;
