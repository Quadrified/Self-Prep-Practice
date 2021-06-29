import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Modal,
} from 'react-native';

const GoalInput = ({ addGoalHandler, isAddModeVisible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = goal => {
    setEnteredGoal(goal);
  };

  const addGoalCleanUp = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal
      visible={isAddModeVisible}
      animationType="slide"
      style={styles.modalContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add note..."
          placeholderTextColor="#737373"
          style={styles.input}
          onChangeText={goal => goalInputHandler(goal)}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableNativeFeedback onPress={onCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={styles.button}
            onPress={addGoalCleanUp}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#000',
    opacity: 0.5,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  input: {
    borderBottomWidth: 1,
    color: '#000',
    borderColor: '#CECECE',
    paddingVertical: 5,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#005A9C',
    color: '#FAFAFA',
    textTransform: 'uppercase',
    marginVertical: 5,
  },
  cancelButtonText: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    color: '#FAFAFA',
    textTransform: 'uppercase',
    marginHorizontal: 5,
  },
});

export default GoalInput;
