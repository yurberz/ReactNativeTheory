import React, {Component} from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ITextButtonProps {
  title: string;
  color: string;
  align?: 'flex-start' | 'center' | 'flex-end';
  textButtonStyle?: object;
  onPress?(): void | boolean;
}

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

const styles = StyleSheet.create({
  touchableOpacityStyle: {},
  textStyle: {
    fontSize: 13,
  },
});

export default TextButton;
