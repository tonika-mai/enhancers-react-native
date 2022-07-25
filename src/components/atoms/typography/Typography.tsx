import React, {type PropsWithChildren} from 'react';
import {Text} from 'react-native';
import theme from '../../../theme.ts';
import styles from './Typography.styles';
import {TypographyProps} from './Typography.types';

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  children,
  size = 18,
  weight = 'medium',
  color = 'primary',
  align = 'left',
  style,
}) => (
  <Text
    style={[
      styles.text,
      {
        fontSize: size,
        fontWeight: theme.typography.weight[weight],
        color: theme.palette[color],
        textAlign: align,
      },
      style,
    ]}>
    {children}
  </Text>
);

export default Typography;
