import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IHiddenItemProps} from '../../helpers/ts-helpers/interfaces';
import styles from './styles';

const HiddenItem: React.FC<IHiddenItemProps> = ({onPress}) => {
  return (
    <View style={styles.rowBack}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.backRightBtn}
        onPress={onPress}>
        <FontAwesome name="trash" size={20} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

export default HiddenItem;
