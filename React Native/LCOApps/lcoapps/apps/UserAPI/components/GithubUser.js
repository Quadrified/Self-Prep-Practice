import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import { Card, CardItem, H1 } from 'native-base';
import moment from 'moment';

function GithubUser({ details }) {
  console.log(details);
  return (
    <>
      <Card style={styles.card}>
        <CardItem cardBody style={styles.cardItem}>
          <Image
            source={{
              uri: details.avatar_url,
              width: 150,
              height: 250,
            }}
            style={styles.image}
          />
        </CardItem>
        <CardItem style={styles.cardItem}>
          <H1 style={styles.text}>
            {details.name} / {details.login}
          </H1>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>{details.bio}</Text>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>Public repos:{details.public_repos}</Text>
        </CardItem>
        <CardItem footer style={styles.cardItem}>
          <Text style={{ color: '#E07C24' }}> Github URL : </Text>
          <Text style={{ color: '#FFF' }}>{details.url}</Text>
        </CardItem>
        <CardItem footer style={styles.cardItem}>
          <Text style={{ color: '#E07C24' }}> Github created at : </Text>
          <Text style={{ color: '#FFF' }}>
            {moment(details.created_at).format('DD-MM-YYYY')}
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

export default GithubUser;
