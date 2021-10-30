import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const FirebaseFirestore = props => {
  const [firestoreData, setFirestoreData] = useState(null);
  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc('omer')
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
        setFirestoreData(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.container?.backgroundColor}
      />
      <View style={styles.container}>
        <Text style={styles.text}>{firestoreData.Name}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    color: '#000',
  },
});

export default FirebaseFirestore;
