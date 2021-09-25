import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './socialNetworkButtonStyles';
import {ISocialNerworkButtonProps} from '../../helpers/ts-helpers/interfaces';

class SocialNetworkButton extends Component<ISocialNerworkButtonProps, {}> {
  render() {
    return (
      <TouchableOpacity
        style={{...styles.touchableOpacityStyle, ...this.props.buttonStyle}}
        activeOpacity={0.8}>
        <FontAwesome name={this.props.iconName} size={18} color="#ffffff" />
      </TouchableOpacity>
    );
  }
}

export default SocialNetworkButton;
