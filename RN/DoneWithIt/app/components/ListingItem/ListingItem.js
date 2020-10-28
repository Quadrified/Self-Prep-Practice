import {Color} from 'chalk';
import React from 'react';
import {View, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import colors from '../../configs/colors';
import AppText from '../AppText';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListingItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  // console.log(title, subTitle, image, onPress);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListingItem;
