import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing,
    flex: 1,
  },
  removeBtnContainer: {
    alignSelf: 'flex-end',
  },
  cardsContainer: {
    margin: -10,
  },
});

export default styles;
