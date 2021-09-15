import React, {Component} from 'react';

import {TextInput, Text, StyleSheet, View} from 'react-native';

interface ICredentialTextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  inputStyle?: object;
  value?: string;
  editable?: boolean;
  onFocus?(): void;
  onChangeText?(text: string): void;
  errorMessage?: string;
}

class CredentialTextInput extends Component<ICredentialTextInputProps, {}> {
  render() {
    return (
      <>
        <View>
          <TextInput
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            editable={this.props.editable}
            onFocus={this.props.onFocus}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry}
            style={{...styles.textInputStyle, ...this.props.inputStyle}}
          />

          <View style={styles.textWrapper}>
            <Text style={styles.errorMsg}>{this.props.errorMessage}</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorMsg: {
    fontSize: 10,
    color: '#ff0000',
  },
  textInputStyle: {
    paddingVertical: 8,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgb(181,182,221)',
    fontSize: 15,
  },
});

export default CredentialTextInput;
