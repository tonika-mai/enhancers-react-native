import {StyleSheet} from 'react-native';
import theme from '../../../theme.ts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.white,
    borderRadius: theme.borderRadius,
    height: 78,
    elevation: 8,
  },
});

export default styles;
