import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import {
  List,
  ListItem,
  Left,
  Button,
  Icon,
  Right,
  CheckBox,
  Title,
  H1,
  Fab,
  Container,
  Body,
  Text,
  Spinner,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from '@react-navigation/native';

function Home({ navigation, route }) {
  const [listOfSeasons, setListOfSeasons] = useState([]);
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

  const getList = async () => {
    // Goes into asyncstorage and fills state

    setLoading(true);

    console.log(await AsyncStorage.getItem('@season_list'));

    const storedValue = await AsyncStorage.getItem('@season_list');

    if (!storedValue) {
      setListOfSeasons([]);
    }

    const list = JSON.parse(storedValue);
    setListOfSeasons(list);

    setLoading(false);
  };

  const deleteSeason = async (id) => {
    // Delete seasons
    const newList = await listOfSeasons?.filter((list) => list.id != id);
    await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
    setListOfSeasons(newList);
  };

  const markWatched = async (id) => {
    // Mark watched seasons

    const newList = await listOfSeasons?.map((list) => {
      if (list.id == id) {
        list.isWatched = !list.isWatched;
      }
      return list;
    });

    await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
    setListOfSeasons(newList);
  };

  useEffect(() => {
    getList();
  }, [isFocused]);

  return (
    <>
      {loading ? (
        <Container style={styles.container}>
          <Spinner color="#00B7C2" />
        </Container>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          {listOfSeasons?.length == 0 ? (
            <Container style={styles.container}>
              <H1 style={styles.heading}>
                Watchlist is empty. Please add a season.
              </H1>
            </Container>
          ) : (
            <>
              <H1 style={styles.heading}>Next series to watch</H1>
              <List>
                {listOfSeasons?.map((season) => (
                  <ListItem style={styles.listItem} key={season.id} noBorder>
                    <Left>
                      <Button
                        style={styles.actionButton}
                        danger
                        onPress={() => deleteSeason(season.id)}>
                        <Icon name="trash" active />
                      </Button>
                      <Button
                        style={styles.actionButton}
                        onPress={() => navigation.navigate('Edit', { season })}>
                        <Icon name="edit" type="Feather" active />
                      </Button>
                    </Left>
                    <Body>
                      <Title style={styles.seasonName}>{season.name}</Title>
                      <Text note style={styles.totalSeason}>
                        {season.totalSeasons} seasons to watch
                      </Text>
                    </Body>
                    <Right>
                      <CheckBox
                        style={{ marginRight: 10 }}
                        checked={season.isWatched}
                        onPress={() => markWatched(season.id)}
                      />
                    </Right>
                  </ListItem>
                ))}
              </List>
            </>
          )}
          <Fab
            style={{
              backgroundColor: '#5067FF',
              elevation: 10,
              shadowColor: 'transparent',
              shadowOpacity: 0,
            }}
            position="bottomRight"
            onPress={() => navigation.navigate('Add')}>
            <Icon name="add" />
          </Fab>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  actionButton: {
    marginLeft: 10,
  },
  seasonName: {
    color: '#fdcb9e',
    textAlign: 'center',
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
  totalSeason: {
    textAlign: 'center',
  },
});

export default Home;
