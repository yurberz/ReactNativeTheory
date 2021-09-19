/* eslint-disable no-useless-escape */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Platform, Keyboard, EmitterSubscription} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Avatar from '../../components/avatar/Avatar';
import BackgroundForm from '../../components/backgroudForm/BackgroundForm';
import CredentialTextInput from '../../components/credentialTextInput/CredentialTextInput';
import FilledButton from '../../components/filledButton/FilledButton';
import FollowBlock from '../../components/followBlock/FollowBlock';
import Header from '../../components/header/Header';
import styles from './profileScreenStyles';
import {
  IProfileScreenState,
  IUserProfile,
} from '../../helpers/ts-helpers/interfaces';
import {KeyStorage} from '../../helpers/ts-helpers/enums';

const INITIAL_STATE = {
  name: 'your name',
  email: 'example@mail.com',
  followers: 23,
  following: 234,
  image: {
    uri: 'https://cdn.pixabay.com/photo/2017/12/16/06/41/avatar-3022215_960_720.jpg',
  },
  isEditMode: false,
  isShowKeyboard: false,
  errorName: null,
  errorEmail: null,
};

class ProfileScreen extends Component<{}, IProfileScreenState> {
  state = {...INITIAL_STATE};

  keyboardDidHide!: EmitterSubscription;

  editOn = () => {
    this.setState({isEditMode: true});
  };

  editOff = () => {
    this.setState({isEditMode: false});
  };

  keyboardShow = () => {
    this.setState({isShowKeyboard: true});
  };

  handleSubmit = () => {
    const userProfile = {
      name: this.state.name,
      email: this.state.email,
      image: this.state.image,
    };

    this.storeData(userProfile);

    this.editOff();
  };

  chooseAvatarFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      const imageUri = Platform.OS === 'ios' ? img.sourceURL : img.path;

      let image: any = {...this.state.image};
      image.uri = imageUri;

      this.setState({image});
    });
  };

  storeData = async (value: IUserProfile) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem(KeyStorage.UserProfile, jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  getData = async () => {
    try {
      const userProfileFromStorage: any = await AsyncStorage.getItem(
        KeyStorage.UserProfile,
      );
      const userProfileParse = JSON.parse(userProfileFromStorage);

      if (userProfileParse !== null) {
        this.setState({...userProfileParse});
      }
    } catch (err) {
      console.log(err);
    }
  };

  validateName = (value: string) => {
    const regEx = /^([a-zA-Z][a-zA-Z]{2,20})?$/;

    if (value === '') {
      this.setState({errorName: null});
    } else if (regEx.test(value)) {
      this.setState({errorName: null});
    } else {
      this.setState({
        errorName:
          'Error: only name is 3-20 characters long and letters characters',
      });
    }
  };

  validateEmail = (value: string) => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value === '') {
      this.setState({errorEmail: null});
    } else if (regEx.test(value)) {
      this.setState({errorEmail: null});
    } else {
      this.setState({errorEmail: 'Error: invalid e-mail type'});
    }
  };

  onChangeName = (value: string) => {
    this.setState({name: value});

    this.validateName(value);
  };

  onChangeEmail = (value: string) => {
    this.setState({email: value});

    this.validateEmail(value);
  };

  isEnableButton = () => {
    return (
      this.state.name !== '' &&
      this.state.email !== '' &&
      this.state.errorName === null &&
      this.state.errorEmail === null
    );
  };

  componentDidMount() {
    this.getData();

    this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      this.setState({isShowKeyboard: false});
    });
  }

  componentWillUnmount() {
    this.keyboardDidHide.remove();
  }

  render() {
    const {
      name,
      email,
      image,
      followers,
      following,
      isEditMode,
      isShowKeyboard,
      errorName,
      errorEmail,
    } = this.state;

    return (
      <BackgroundForm
        viewStyle={{...styles.viewStyle, paddingTop: isEditMode ? 75 : 60}}
        enabledKeyboardAvoiding={!isShowKeyboard}
        prependComponent={
          <Header
            title="My profile"
            isEditMode={isEditMode}
            onPress={this.editOn}
          />
        }>
        <Avatar
          onPress={this.chooseAvatarFromLibrary}
          avatarImg={image}
          isEditMode={isEditMode}
          avatarStyle={styles.avatarStyle}
        />

        {!isEditMode && (
          <FollowBlock followers={followers} following={following} />
        )}

        <CredentialTextInput
          value={name}
          onChangeText={this.onChangeName}
          editable={isEditMode}
          onFocus={this.keyboardShow}
          inputStyle={styles.inputStyle}
          placeholder="Name"
          errorMessage={errorName}
        />
        <CredentialTextInput
          value={email}
          onChangeText={this.onChangeEmail}
          editable={isEditMode}
          onFocus={this.keyboardShow}
          placeholder="Email"
          errorMessage={errorEmail}
        />

        {isEditMode ? (
          <FilledButton
            filledButtonStyle={styles.updateButtonStyle(isShowKeyboard)}
            title="Update profile"
            onPress={this.handleSubmit}
            disabled={!this.isEnableButton()}
          />
        ) : (
          <FilledButton
            filledButtonStyle={styles.filledButtonStyle}
            title="Show state"
            onPress={() => console.log('DISPLAYED STATE:', this.state)}
          />
        )}
      </BackgroundForm>
    );
  }
}

export default ProfileScreen;
