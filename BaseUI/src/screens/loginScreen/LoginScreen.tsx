import React, {Component} from 'react';
import {Text, View} from 'react-native';
import BackgroundForm from '../../components/backgroudForm/BackgroundForm';
import CredentialTextInput from '../../components/credentialTextInput/CredentialTextInput';
import FilledButton from '../../components/filledButton/FilledButton';
import SocialNetworkButtonsForm from '../../components/socialNetworkButtonsForm/SocialNetworkButtonsForm';
import TextButton from '../../components/textButton/TextButton';
import styles from './styles';
import {ILoginScreenState} from '../../helpers/ts-helpers/interfaces';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class LoginScreen extends Component<{}, ILoginScreenState> {
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
      <BackgroundForm>
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

        <TextButton
          title="Forget password?"
          align="flex-start"
          color="rgb(64, 80, 164)"
          textButtonStyle={styles.textButtonStyle}
        />
        <FilledButton onPress={this.handleSubmit} title="Sign In" />

        <Text style={styles.orSignWithStyle}>or sign with</Text>

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

export default LoginScreen;
