import React, {type PropsWithChildren} from 'react';
import {StyleSheet, Text} from 'react-native';
import theme from '../theme.js';

export const AppText: React.FC<
  PropsWithChildren<{
    size: number;
    weight: 'light' | 'medium' | 'semibold' | 'bold';
    color: string;
    align: string;
  }>
> = ({
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

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
    margin: 0,
  },
});
