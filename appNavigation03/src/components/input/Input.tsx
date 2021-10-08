import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import {InputProps} from '../../helpers/ts-helpers/interfaces';

const Input: React.FC<InputProps> = ({value, onChange, onSubmitEditing}) => {
  return (
    <TextInput
      autoCapitalize="none"
      style={styles.input}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default Input;
