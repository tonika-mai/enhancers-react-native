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
  buttonSearchContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: 60,
    justifyContent: 'center',
  },
  cardsContainer: {
    margin: -10,
  },
});

export default styles;
