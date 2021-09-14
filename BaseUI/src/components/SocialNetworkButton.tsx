import React, {Component} from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ISocialNerworkButtonProps {
  iconName: string;
  buttonStyle?: object;
}

class SocialNetworkButton extends Component<ISocialNerworkButtonProps> {
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

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 8,
    backgroundColor: 'rgb(255, 103, 97)',
  },
});

export default SocialNetworkButton;
