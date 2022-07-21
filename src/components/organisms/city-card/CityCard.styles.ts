import {StyleSheet} from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: theme.borderRadius,
    height: 140,
    padding: theme.spacing,
    margin: 10,
  },
  flexGrow: {
    flex: 1,
  },
  tempContainer: {
    alignItems: 'center',
  },
});

export default styles;
