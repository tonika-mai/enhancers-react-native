import {StyleSheet} from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5374e7',
    borderRadius: theme.borderRadius,
    height: 140,
    padding: theme.spacing,
    margin: 10,
  },
  removeBtnContainer: {
    position: 'absolute',
    top: -5,
    left: -5,
  },
  flexGrow: {
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
  },
  tempContainer: {
    alignItems: 'center',
  },
});

export default styles;
