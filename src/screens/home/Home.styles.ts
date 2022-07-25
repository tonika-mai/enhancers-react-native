import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing,
    paddingVertical: 40,
    flex: 1,
  },
  editBtnContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
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
