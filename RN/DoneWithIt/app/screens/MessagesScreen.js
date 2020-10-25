import React from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import ListingItem from '../components/ListingItem';

const messages = [
  {
    id: 1,
    title: 'T1',
    desc: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    desc: 'D2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    desc: 'D3',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 4,
    title: 'T4',
    desc: 'D4',
    image: require('../assets/mosh.jpg'),
  },
];

const renderItem = ({item}) => (
  <ListingItem title={item.title} subTitle={item.desc} image={item.image} />
);

function MessagesScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : '',
  },
});

export default MessagesScreen;
