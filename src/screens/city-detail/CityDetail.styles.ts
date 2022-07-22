import {StyleSheet} from 'react-native';
import theme from '../../../theme.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing,
    backgroundColor: '#5374e7',
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainWeather: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cityCardsContainer: {
    margin: -10,
    flexDirection: 'row',
  },
});

export default styles;
