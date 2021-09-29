import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IFilledButtonProps} from '../../helpers/ts-helpers/interfaces';

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

export default FilledButton;
