import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import Realm from 'realm';

const MongoDBRDemo = async props => {
  const TaskSchema = {
    name: 'Task',
    properties: {
      _id: 'int',
      name: 'string',
      status: 'string?',
    },
    primaryKey: '_id',
  };

  const realm = await Realm.open({
    path: 'myrealm',
    schema: [TaskSchema],
  });

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.container?.backgroundColor}
      />
      <View style={styles.container}>
        <Text>MongoDBRDemo</Text>
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
});

export default MongoDBRDemo;
