import React, {useState} from 'react';
import {Text, View} from 'react-native';
import BackgroundForm from '../../components/backgroudForm/BackgroundForm';
import CredentialTextInput from '../../components/credentialTextInput/CredentialTextInput';
import FilledButton from '../../components/filledButton/FilledButton';
import SocialNetworkButtonsForm from '../../components/socialNetworkButtonsForm/SocialNetworkButtonsForm';
import TextButton from '../../components/textButton/TextButton';
import styles from './styles';
import {ILoginScreenState} from '../../helpers/ts-helpers/interfaces';
import useDeviceOrientation from '../../hooks/useDeviceOrientation';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginScreen: React.FC = () => {
  const [state, setState] = useState<ILoginScreenState>(INITIAL_STATE);

  const handleSubmit = () => {
    reset();
  };

  const reset = () => {
    setState(INITIAL_STATE);
  };

  const onChangeEmail = (value: string) => {
    setState(prevState => ({
      ...prevState,
      email: value,
    }));
  };

  const onChangePassword = (value: string) => {
    setState(prevState => ({
      ...prevState,
      password: value,
    }));
  };

  const orientation = useDeviceOrientation();
  console.log(orientation);

  return (
    <BackgroundForm>
      <View style={styles.inputContainer}>
        <CredentialTextInput
          value={state.email}
          onChangeText={onChangeEmail}
          inputStyle={styles.inputStyle}
          placeholder="Email"
        />
        <CredentialTextInput
          value={state.password}
          onChangeText={onChangePassword}
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
      <FilledButton onPress={handleSubmit} title="Sign In" />
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
};

export default LoginScreen;
