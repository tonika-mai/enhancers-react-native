import React, {type PropsWithChildren} from 'react';
import {Text} from 'react-native';
import theme from '../../theme.ts';
import styles from './Typography.styles';
import {AppTextProps} from './Typography.types';

export const AppText: React.FC<PropsWithChildren<AppTextProps>> = ({
  children,
  size = 18,
  weight = 'medium',
  color = 'primary',
  align = 'left',
  ...props
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
    ]}
    {...props}>
    {children}
  </Text>
);

export const AppTitle: React.FC = props => (
  <AppText {...props} weight="semibold" align="center" size={28} />
);
