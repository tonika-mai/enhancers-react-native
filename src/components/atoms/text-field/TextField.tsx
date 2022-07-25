import React from 'react';
import {TextInput} from 'react-native';
import styles from './TextField.styles';

const TextField: React.FC<{
  value: string;
}> = ({value, onChange}) => {
  const handleChange = input => {
    onChange(input);
  };

  return (
    <TextInput value={value} onChangeText={handleChange} style={styles.input} />
  );
};

export default TextField;
