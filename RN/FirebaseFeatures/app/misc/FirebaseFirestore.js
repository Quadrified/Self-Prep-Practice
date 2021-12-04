import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  TouchableNativeFeedback,
  Pressable,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const FirebaseFirestore = props => {
  const [firestoreData, setFirestoreData] = useState(null);
  useEffect(() => {
    /** --------------------------
      * Getting a single doc from collection 'users'
     --------------------------**/
    // const subscriber = firestore()
    //   .collection('users')
    //   .doc('xBzttmINU5CyTgaAlJtM')
    //   .onSnapshot(documentSnapshot => {
    //     console.log('User data: ', documentSnapshot.data());
    //     setFirestoreData(documentSnapshot.data());
    //   });

    /** --------------------------
      * For getting all users from Firestore
     --------------------------**/
    const subscriber = firestore()
      .collection('users')
      .onSnapshot(docs => {
        let users = [];
        docs.forEach(doc => {
          users.push(doc.data());
        });
        console.log('User data: ', users);
        setFirestoreData(users);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const addRandomUser = async () => {
    let nickName = Math.random().toString(36).substring(7);
    let age = Math.floor(Math.random() * 50);
    console.log('>>>name<<<', nickName, age);

    // adding random user to collection as a doument
    await firestore()
      .collection('users')
      .add({ name: nickName, age, test: true })
      .then(res => {
        console.log('>>>res<<<', res, firestoreData);
      });

    // updating an existing document 'omer' under 'users' collection
    await firestore()
      .collection('users')
      .doc('omer')
      .update({
        name: 'Omer Quadri',
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(res => {
        console.log('>>>res<<<', res, firestoreData);
      });

    // manage offline persistence
    // await firestore().settings({
    //   persistence: true, // disable offline persistence
    // });
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.container?.backgroundColor}
      />
      <View style={styles.container}>
        {firestoreData?.map(user => (
          <Text style={styles.text} key={user}>
            Name:{user.name}
          </Text>
        ))}
      </View>

      <Pressable
        style={styles.buttonContainer}
        android_ripple={{
          color: '#ccc',
        }}
        onPress={addRandomUser}>
        <Text style={styles.button}>Add Random User</Text>
      </Pressable>
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
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#005A9C',
    alignContent: 'center',
  },
  button: {
    fontSize: 18,
  },
});

export default FirebaseFirestore;
