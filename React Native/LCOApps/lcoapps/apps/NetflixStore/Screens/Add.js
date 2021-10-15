import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { Container, Form, Item, Input, Button, H1 } from 'native-base';
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar';

import { useIsFocused } from '@react-navigation/native'; // For fixing bug of reloading data

function Add({ navigation, route }) {
  const [name, setName] = useState('');
  const [totalSeasons, setTotalSeasons] = useState('');

  const addToList = async () => {
    try {
      // Checking if name and totalSeasons exist

      if (!name || !totalSeasons) {
        return Snackbar.show({
          text: 'Please fill both the fields',
          backgroundColor: '#BF3325',
          textColor: '#FFF',
        });
      }

      // Contructing an object to be pushed in the Async storage array

      const seasonToAdd = {
        id: shortid.generate(),
        name,
        totalSeasons,
        isWatched: false,
      };

      // Checking two scenarios

      const storedValue = await AsyncStorage.getItem('@season_list');
      const previousList = await JSON.parse(storedValue);

      // Checking if previous data exists
      if (!previousList) {
        const newList = [seasonToAdd];
        await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
      } else {
        previousList.push(seasonToAdd);
        await AsyncStorage.setItem(
          '@season_list',
          JSON.stringify(previousList),
        );
      }

      // Navigating to Home screen
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <H1 style={styles.heading}>Add to watchlist</H1>
          <Form>
            <Item rounded style={styles.formItem}>
              <Input
                placeholder="Season name.."
                style={{ color: '#EEE', paddingLeft: 20 }}
                maxLength={10}
                value={name}
                onChangeText={(name) => setName(name)}
              />
            </Item>
            <Item rounded style={styles.formItem}>
              <Input
                placeholder="Total no. of seasons.."
                style={{ color: '#EEE', paddingLeft: 20 }}
                keyboardType="number-pad"
                maxLength={2}
                value={totalSeasons}
                onChangeText={(season) => setTotalSeasons(season)}
              />
            </Item>
            <Button primary rounded block onPress={addToList}>
              <Text style={styles.addBtn}>Add</Text>
            </Button>
          </Form>
        </ScrollView>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
  addBtn: {
    color: '#eee',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default Add;
