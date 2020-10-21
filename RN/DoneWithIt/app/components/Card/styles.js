import {StyleSheet} from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
