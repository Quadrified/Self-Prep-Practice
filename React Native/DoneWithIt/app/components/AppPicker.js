import {jsxAttribute} from '@babel/types';
import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';
import defaultStyles from '../configs/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

function AppPicker({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
  width = '100%',
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('Modal Open');
          setModalVisible(true);
        }}>
        <View style={[styles.container, {width}]}>
          {icon && (
            <Icon
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <Icon
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({item}) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  console.log(item);
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
});

export default AppPicker;
