import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Button, H1, Container, Text, Form, Item, Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

function Edit({ navigation, route }) {
  const [name, setName] = useState('');
  const [totalSeasons, setTotalSeasons] = useState('');
  const [id, setId] = useState(null);

  const update = async () => {
    // Updating the data
    try {
      if (!name || !totalSeasons) {
        return Snackbar.show({
          text: 'Please fill both the fields',
          backgroundColor: '#BF3325',
          textColor: '#FFF',
        });
      }

      const seasonToUpdate = {
        id,
        name,
        totalSeasons,
        isWatched: false,
      };
      const storedValue = await AsyncStorage.getItem('@season_list');
      const list = await JSON.parse(storedValue);

      list.map((singleSeason) => {
        if (singleSeason.id == id) {
          singleSeason.name = name;
          singleSeason.totalSeasons = totalSeasons;
        }
        return singleSeason;
      });

      await AsyncStorage.setItem('@season_list', JSON.stringify(list));

      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const { season } = route.params;
    const { id, name, totalSeasons, isWatched } = season;

    setId(id);
    setName(name);
    setTotalSeasons(totalSeasons);
  }, []);

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
            <Button rounded block onPress={update}>
              <Text style={styles.addBtn}>Update</Text>
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
});

export default Edit;
