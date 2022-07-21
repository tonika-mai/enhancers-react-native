import Icon from '../../atoms/icon';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Typography from '../../atoms/typography';
import styles from './IconTextBtn.styles';

const IconTextBtn: React.FC<PropsWithChildren> = ({
  icon,
  onPress,
  children,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Icon name={icon} style={styles.icon} />
    <Typography size={20} weight="bold">
      {children}
    </Typography>
  </TouchableOpacity>
);

export default IconTextBtn;
