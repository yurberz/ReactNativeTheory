import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IButtonProps} from '../../helpers/ts-helpers/interfaces';

const Button: React.FC<IButtonProps> = ({title, onPress, buttonStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.buttonStyle, buttonStyle]}>
      <Text style={styles.buttonTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
