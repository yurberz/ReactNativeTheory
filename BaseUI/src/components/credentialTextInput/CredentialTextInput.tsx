import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './styles';
import {ICredentialTextInputProps} from '../../helpers/ts-helpers/interfaces';

class CredentialTextInput extends Component<ICredentialTextInputProps> {
  render() {
    return (
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
    );
  }
}

export default CredentialTextInput;
