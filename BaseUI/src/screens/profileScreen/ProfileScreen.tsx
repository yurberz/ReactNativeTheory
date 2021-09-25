/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProfileScreenState} from '../../helpers/ts-helpers/interfaces';
import {KeyStorage} from '../../helpers/ts-helpers/enums';
import {chooseAvatarFromLibrary} from '../../helpers/function-helpers/imagePicker';
import useName from '../../hooks/useName';
import useEmail from '../../hooks/useEmail';
import Avatar from '../../components/avatar/Avatar';
import BackgroundForm from '../../components/backgroudForm/BackgroundForm';
import CredentialTextInput from '../../components/credentialTextInput/CredentialTextInput';
import FilledButton from '../../components/filledButton/FilledButton';
import FollowBlock from '../../components/followBlock/FollowBlock';
import Header from '../../components/header/Header';
import TextButton from '../../components/textButton/TextButton';
import styles from './styles';

const INITIAL_STATE = {
  followers: 23,
  following: 234,
  isEditMode: false,
  isShowKeyboard: false,
};

const ProfileScreen: React.FC = () => {
  const [state, setState] = useState<IProfileScreenState>(INITIAL_STATE);
  const [name, errorName, setName] = useName('your name');
  const [email, errorEmail, setEMail] = useEmail('example@mail.com');
  const [avatar, setAvatar] = useState<string>(
    'https://cdn.pixabay.com/photo/2017/12/16/06/41/avatar-3022215_960_720.jpg',
  );

  const {followers, following, isEditMode, isShowKeyboard} = state;

  const editOn = () => {
    setState(prevState => ({
      ...prevState,
      isEditMode: true,
    }));
  };

  const editOff = () => {
    setState(prevState => ({
      ...prevState,
      isEditMode: false,
    }));
  };

  const keyboardShow = () => {
    setState(prevState => ({
      ...prevState,
      isShowKeyboard: true,
    }));
  };

  const handleSubmit = async () => {
    const storageName = [KeyStorage.userName, name];
    const storageEmail = [KeyStorage.userEmail, email];
    const storageAvatar = [KeyStorage.userAvatar, avatar];

    try {
      await AsyncStorage.multiSet([storageName, storageEmail, storageAvatar]);
    } catch (err) {
      console.log(err);
    }

    editOff();
  };

  const getData = async () => {
    try {
      const getName = await AsyncStorage.getItem(KeyStorage.userName);
      const getEmail = await AsyncStorage.getItem(KeyStorage.userEmail);
      const getAvatar = await AsyncStorage.getItem(KeyStorage.userAvatar);

      if (getName !== null) {
        setName(getName);
      }
      if (getEmail !== null) {
        setEMail(getEmail);
      }
      if (getAvatar !== null) {
        setAvatar(getAvatar);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeName = (value: string) => {
    setName(value);
  };

  const onChangeEmail = (value: string) => {
    setEMail(value);
  };

  const isEnableButton = () => {
    return (
      name !== '' && email !== '' && errorName === null && errorEmail === null
    );
  };

  useEffect(() => {
    getData();

    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setState(prevState => ({
        ...prevState,
        isShowKeyboard: false,
      }));
    });

    return () => keyboardDidHide.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackgroundForm
      viewStyle={{...styles.viewStyle, paddingTop: isEditMode ? 75 : 60}}
      enabledKeyboardAvoiding={!isShowKeyboard}
      prependComponent={
        <Header
          title="My profile"
          titleStyle={styles.headerTitleStyle}
          headerChildrenBlockStyles={styles.headerChildrenBlockStyles}>
          {!isEditMode && (
            <TextButton title="Edit" onPress={editOn} color="#ffffff" />
          )}
        </Header>
      }>
      <Avatar
        onPress={() => chooseAvatarFromLibrary(avatar, setAvatar)}
        avatarImg={avatar}
        isEditMode={isEditMode}
        avatarStyle={styles.avatarStyle}
      />
      {!isEditMode && (
        <FollowBlock followers={followers} following={following} />
      )}
      <CredentialTextInput
        value={name}
        onChangeText={onChangeName}
        editable={isEditMode}
        onFocus={keyboardShow}
        inputStyle={styles.inputStyle}
        placeholder="Name"
        errorMessage={errorName}
      />
      <CredentialTextInput
        value={email}
        onChangeText={onChangeEmail}
        editable={isEditMode}
        onFocus={keyboardShow}
        placeholder="Email"
        errorMessage={errorEmail}
      />

      {isEditMode ? (
        <FilledButton
          filledButtonStyle={styles.updateButtonStyle(isShowKeyboard)}
          title="Update profile"
          onPress={handleSubmit}
          disabled={!isEnableButton()}
        />
      ) : (
        <FilledButton
          filledButtonStyle={styles.filledButtonStyle}
          title="Show state"
          onPress={() =>
            console.log(
              'DISPLAYED STATE:',
              '\n',
              name,
              '\n',
              email,
              '\n',
              avatar,
              '\n',
              JSON.stringify(state, null, 2),
            )
          }
        />
      )}
    </BackgroundForm>
  );
};

export default ProfileScreen;
