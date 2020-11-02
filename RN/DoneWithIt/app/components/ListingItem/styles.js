import {StyleSheet} from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
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
