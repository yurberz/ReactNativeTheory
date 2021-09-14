import React, {Component} from 'react';

import {TextInput, StyleSheet, View} from 'react-native';

interface ICredentialTextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  inputStyle?: object;
  value?: string;
  onChangeText?(text: string): void;
}

class CredentialTextInput extends Component<ICredentialTextInputProps, {}> {
  render() {
    return (
      <View>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          style={{...styles.textInputStyle, ...this.props.inputStyle}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    paddingVertical: 8,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgb(181,182,221)',
    fontSize: 15,
  },
});

export default CredentialTextInput;
