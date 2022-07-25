import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  dotSegmentContainer: {
    flexDirection: 'row',
    height: 100,
  },
  centered: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  dotContainer: {
    position: 'absolute',
    top: '50%',
  },
  segment: {
    width: 60,
    height: 5,
    marginLeft: -14,
    marginRight: -14,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});

export default styles;
