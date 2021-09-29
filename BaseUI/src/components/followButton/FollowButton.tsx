import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ISubscriberCellProps} from '../../helpers/ts-helpers/interfaces';

const FollowButton: React.FC<ISubscriberCellProps> = ({
  subscriber,
  onPressFollowButton,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.defaultButtonStyle,
        subscriber.isFollowing ? styles.followingButton : styles.followButton,
      ]}
      onPress={onPressFollowButton}>
      <Text
        style={[
          styles.buttonText,
          subscriber.isFollowing ? styles.followingText : styles.followText,
        ]}>
        {subscriber.isFollowing ? 'Following' : 'Follow'}
      </Text>
    </TouchableOpacity>
  );
};

export default FollowButton;
