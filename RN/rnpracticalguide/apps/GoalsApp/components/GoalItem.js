import React from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';

const GoalItem = ({ goalTitle, onDelete, goalID }) => {
  return (
    <>
      <TouchableNativeFeedback onPress={() => onDelete(goalID)}>
        <View style={styles.goalList}>
          <Text style={{ color: '#FAFAFA' }}>{goalTitle}</Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  goalList: {
    padding: 10,
    backgroundColor: 'gray',
    borderColor: 'black',
    marginVertical: 5,
    borderRadius: 5,
    padding: 10,
  },
});

export default GoalItem;
