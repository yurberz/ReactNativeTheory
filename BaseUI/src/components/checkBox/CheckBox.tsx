import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {ISubscriberCellProps} from '../../helpers/ts-helpers/interfaces';

const CheckBox: React.FC<ISubscriberCellProps> = ({
  subscriber,
  onPressFollowButton,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressFollowButton}>
      <MaterialIcon
        name={subscriber.isSelected ? 'check-box' : 'check-box-outline-blank'}
        size={25}
        color={subscriber.isSelected ? '#0000ff' : '#a9a9a9'}
      />
    </TouchableOpacity>
  );
};

export default CheckBox;
