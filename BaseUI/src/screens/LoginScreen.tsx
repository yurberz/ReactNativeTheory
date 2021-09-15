import React, {Component} from 'react';

import {Text, StyleSheet, View} from 'react-native';

import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import SocialNetworkButtonsForm from '../components/SocialNetworkButtonsForm';
import TextButton from '../components/TextButton';

interface LoginScreenState {
  email: string;
  password: string;
}

const INITIAL_STATE = {
  email: '',
  password: '',
};

class LoginScreen extends Component<{}, LoginScreenState> {
  state = {
    ...INITIAL_STATE,
  };

  handleSubmit = () => {
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({...INITIAL_STATE});
  };

  render() {
    const {email, password} = this.state;

    return (
      <BackgroundForm viewStyle={styles.viewStyle}>
        {/* Form inputs */}
        <View style={styles.inputContainer}>
          <CredentialTextInput
            value={email}
            onChangeText={value => this.setState({email: value})}
            inputStyle={styles.inputStyle}
            placeholder="Email"
          />
          <CredentialTextInput
            value={password}
            onChangeText={value => this.setState({password: value})}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        {/* Buttons */}
        <TextButton
          title="Forget password?"
          align="flex-start"
          color="rgb(64, 80, 164)"
          textButtonStyle={styles.textButtonStyle}
        />
        <FilledButton onPress={this.handleSubmit} title="Sign In" />

        <Text style={styles.orSignWithStyle}>or sign with</Text>

        {/* Social buttons */}
        <SocialNetworkButtonsForm
          buttonsContainerStyle={styles.buttonsContainerStyle}
        />

        <TextButton
          title="Don’t have an account?"
          align="center"
          color="rgb(181, 182, 221)"
        />
      </BackgroundForm>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputStyle: {
    marginBottom: 15,
  },
  textButtonStyle: {
    marginBottom: 40,
  },
  orSignWithStyle: {
    marginTop: 18,
    marginBottom: 18,
    textAlign: 'center',
    fontSize: 13,
    color: 'rgb(181, 182, 221)',
  },
  buttonsContainerStyle: {
    marginBottom: 30,
  },
});

export default LoginScreen;
