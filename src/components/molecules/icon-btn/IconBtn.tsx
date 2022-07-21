import Icon, {IconProps} from '../../atoms/icon';

import React from 'react';
import {TouchableOpacity} from 'react-native';

const IconBtn: React.FC<IconProps> = ({name, onPress}) => {
  //TODO onPress type
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} />
    </TouchableOpacity>
  );
};

export default IconBtn;
