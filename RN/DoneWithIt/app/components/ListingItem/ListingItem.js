import React from 'react';
import {View, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import colors from '../../configs/colors';
import AppText from '../AppText';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          <Icon color={colors.medium} name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListingItem;
