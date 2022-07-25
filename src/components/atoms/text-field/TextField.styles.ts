import {StyleSheet} from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: theme.borderRadius,
    borderColor: theme.palette.primary,
    paddingLeft: theme.spacing,
    paddingRight: theme.spacing,
    color: theme.palette.common.black,
    fontSize: 18,
  },
});

export default styles;
