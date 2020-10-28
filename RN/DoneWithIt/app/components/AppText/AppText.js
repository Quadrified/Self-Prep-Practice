import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import defaultStyles from '../../configs/styles';

const AppText = (props) => {
  // console.log(props);
  return (
    <Text style={[defaultStyles.text, props.style]}>{props.children}</Text>
  );
};

export default AppText;
