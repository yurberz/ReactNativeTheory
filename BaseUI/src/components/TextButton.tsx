import React, {Component} from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ITextButtonProps {
  title: string;
  color: string;
  align: 'flex-start' | 'center';
  textButtonStyle?: object;
}

class TextButton extends Component<ITextButtonProps> {
  render() {
    return (
      <TouchableOpacity
        style={{
          ...styles.touchableOpacityStyle,
          ...this.props.textButtonStyle,
          alignItems: this.props.align,
        }}
        activeOpacity={0.8}>
        <Text style={{...styles.textStyle, color: this.props.color}}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {},
  textStyle: {
    fontSize: 13,
  },
});

export default TextButton;
