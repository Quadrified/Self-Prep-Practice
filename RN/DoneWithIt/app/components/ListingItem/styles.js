import {StyleSheet} from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
});

export default styles;
