import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import { Card, CardItem, H1 } from 'native-base';
import moment from 'moment';

function User({ details }) {
  console.log(details);
  return (
    <>
      <Card style={styles.card}>
        <CardItem cardBody style={styles.cardItem}>
          <Image
            source={{
              uri: details.picture?.large,
              width: 150,
              height: 250,
            }}
            style={styles.image}
          />
        </CardItem>
        <CardItem style={styles.cardItem}>
          <H1 style={styles.text}>
            {details.name?.title} {details.name?.first} {details.name?.last}
          </H1>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>{details.cell}</Text>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>{details.email}</Text>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>
            {details.location?.city} {details.location?.state}{' '}
            {details.location?.country}
          </Text>
        </CardItem>
        <CardItem footer style={styles.cardItem}>
          <Text style={{ color: '#E07C24' }}> Registered on : </Text>
          <Text style={{ color: '#FFF' }}>
            {moment(details.registered?.date).format('DD-MM-YYYY')}
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

export default User;
