import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import { Card, CardItem, H1 } from 'native-base';
import moment from 'moment';

function ChuckNorrisJokes({ details }) {
  console.log(details);
  const joke = details.value;
  return (
    <>
      <Card style={styles.card}>
        <CardItem cardBody style={styles.cardItem}>
          <Image
            source={{
              uri: details.icon_url,
              width: 150,
              height: 250,
            }}
            style={styles.image}
          />
        </CardItem>
        <CardItem footer style={styles.cardItem}>
          <Text style={{ color: '#E07C24' }}> Here's a joke :{'\n'} </Text>
          <Text style={{ color: '#FFF', flexWrap: 'wrap' }}>
            {details.value}
          </Text>
        </CardItem>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
    marginVertical: 5,
    flexDirection: 'column',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
});

export default ChuckNorrisJokes;
