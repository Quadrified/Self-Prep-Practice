import React from 'react';
import {View, Image} from 'react-native';
import AppText from '../AppText';
import styles from './styles';

function ListingItem({title, subTitle, image}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListingItem;
