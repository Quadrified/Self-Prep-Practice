import React from 'react';
import {TextInput, View, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';
import defaultStyles from '../configs/styles';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginVertical: 5,
  },
  icon: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
  },
});

export default AppTextInput;
