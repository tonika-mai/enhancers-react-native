import React from 'react';
import {View, ScrollView} from 'react-native';
import Typography from '../../atoms/typography';
import Dot from '../../atoms/dot';
import {formatTemperature, formatTime} from '../../../utils';
import styles from './HoursSlider.styles';

const HoursSlider: React.FC = ({hours, timezone}) => {
  return (
    <ScrollView horizontal>
      {hours?.map((hour, index) => {
        const isFirstItem = index === 0;
        const isLastItem = index === hours.length - 1;
        return (
          <View key={hour.dt} style={styles.dotSegmentContainer}>
            <View style={styles.centered}>
              <View>
                {isFirstItem ? (
                  <Typography size={18} weight="bold" color="textContrast">
                    Now
                  </Typography>
                ) : (
                  <Typography size={12} weight="light" color="textContrast">
                    {formatTime(hour.dt, timezone)}
                  </Typography>
                )}
              </View>
              <View
                style={[
                  styles.dotContainer,
                  {
                    transform: [{translateY: isFirstItem ? -12.5 : -7.5}],
                  },
                ]}>
                {isFirstItem ? <Dot size={25} /> : <Dot size={15} />}
              </View>
              <View>
                <Typography
                  size={isFirstItem ? 25 : 20}
                  weight={isFirstItem ? 'bold' : 'light'}
                  color="textContrast">
                  {formatTemperature(hour.temp)}
                </Typography>
              </View>
            </View>
            {!isLastItem && (
              <View
                style={styles.segment}
                // alphaStart={gradientsAlphas[index].start}
                // alphaEnd={gradientsAlphas[index].end}
              />
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default HoursSlider;
