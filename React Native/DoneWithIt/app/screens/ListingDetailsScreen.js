import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import colors from '../configs/colors';
import ListingItem from '../components/ListingItem';
import Screen from '../components/Screen';

function ListingDetailsScreen(props) {
  return (
    <Screen>
      <View style={{margin: 5}}>
        <Image style={styles.image} source={require('../assets/jacket.jpg')} />
        <View styles={styles.detailsContainer}>
          <AppText style={styles.title}>Red Jacket for sale</AppText>
          <AppText style={styles.price}>$100</AppText>
          <View style={styles.userContainer}></View>
          <ListingItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 listings"
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
