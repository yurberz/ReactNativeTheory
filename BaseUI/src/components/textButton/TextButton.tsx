import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './textButtonStyles';
import {ITextButtonProps} from '../../helpers/ts-helpers/interfaces';

class TextButton extends Component<ITextButtonProps, {}> {
  render() {
    return (
      <TouchableOpacity
        style={{
          ...styles.touchableOpacityStyle,
          ...this.props.textButtonStyle,
          alignItems: this.props.align,
        }}
        activeOpacity={0.8}
        onPress={this.props.onPress}>
        <Text style={{...styles.textStyle, color: this.props.color}}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;
