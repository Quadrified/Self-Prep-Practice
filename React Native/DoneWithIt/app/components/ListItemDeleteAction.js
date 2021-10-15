import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" color={colors.white} size={30} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
