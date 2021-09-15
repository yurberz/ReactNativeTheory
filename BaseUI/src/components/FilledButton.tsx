import React, {Component} from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface IFilledButtonProps {
  title: string;
  onPress(): void;
  filledButtonStyle?: object;
  disabled?: boolean;
}

class FilledButton extends Component<IFilledButtonProps> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        disabled={this.props.disabled}
        activeOpacity={0.8}
        style={{...styles.button, ...this.props.filledButtonStyle}}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgb(64, 80, 164)',
  },
  text: {
    fontSize: 15,
    color: '#ffffff',
  },
});

export default FilledButton;
