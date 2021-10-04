import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ISortButtonProps} from '../../../helpers/ts-helpers/interfaces';
import styles from './styles';

const SortButton: React.FC<ISortButtonProps> = ({
  cb,
  text,
  id,
  selectedIndex,
}) => {
  const clicked = selectedIndex === id;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={clicked}
      style={[styles.button, styles.selectedButton(clicked)]}
      onPress={() => {
        cb(id);
      }}>
      <Text style={styles.text(clicked)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SortButton;
