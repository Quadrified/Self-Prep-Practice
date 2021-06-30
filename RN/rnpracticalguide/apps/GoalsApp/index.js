import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const GoalsApp = props => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalID => {
    setCourseGoals(currentGoals =>
      currentGoals.filter(goal => goal.id !== goalID),
    );
  };

  const onCloseGoalAddingModal = () => {
    setIsAddMode(false);
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.container?.backgroundColor}
      />
      <View style={styles.container}>
        <Text style={{ fontSize: 18, padding: 5, alignSelf: 'center' }}>
          Track your goals like a pro! 😎
        </Text>
        <View style={styles.modalButtonContainer}>
          <TouchableNativeFeedback onPress={() => setIsAddMode(true)}>
            <Text style={styles.modalButton}>Add Goal</Text>
          </TouchableNativeFeedback>
        </View>
        <GoalInput
          addGoalHandler={addGoalHandler}
          isAddModeVisible={isAddMode}
          onCancel={onCloseGoalAddingModal}
        />
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <GoalItem
              goalTitle={item.value}
              onDelete={removeGoalHandler}
              goalID={item.id}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 30,
    width: '100%',
  },
  modalButtonContainer: {
    alignItems: 'center',
    margin: 5,
  },
  modalButton: {
    padding: 15,
    backgroundColor: '#004A9C',
    color: '#FAFAFA',
    borderRadius: 5,
    textTransform: 'uppercase',
  },
});

export default GoalsApp;
