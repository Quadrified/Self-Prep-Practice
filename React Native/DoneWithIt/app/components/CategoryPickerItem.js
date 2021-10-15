import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from './AppText';

function CategoryPickerItem({onPress, item}) {
  return (
    <>
      <View style={styles.container}>
        <Icon name={item.icon} color={item.backgroundColor} size={60} />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryPickerItem;
