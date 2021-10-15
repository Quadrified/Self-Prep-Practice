import React from 'react';
import {View} from 'react-native';
import ReusableIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function Icon({name, size = 40, backgroundColor = '#000', iconColor = '#fff'}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ReusableIcon name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
