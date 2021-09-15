/* eslint-disable no-useless-escape */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {
  StyleSheet,
  Platform,
  Keyboard,
  EmitterSubscription,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Avatar from '../components/Avatar';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import FollowBlock from '../components/FollowBlock';

interface IProfileScreenState {
  name: string;
  email: string;
  followers: number;
  following: number;
  image: object;
  isEditMode: boolean;
  isShowKeyboard: boolean;
  errorName: string;
  errorEmail: string;
}

interface IUserProfile {
  name: string;
  email: string;
  image: object;
}

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
  errorName: '',
  errorEmail: '',
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

  handleSubmit = () => {
    const userProfile = {
      name: this.state.name,
      email: this.state.email,
      image: this.state.image,
    };

    this.storeData(userProfile);

    this.editOff();
  };

  storeData = async (value: IUserProfile) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem('@userProfile', jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  getData = async () => {
    try {
      const userProfileFromStorage: any = await AsyncStorage.getItem(
        '@userProfile',
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
    this.setState({name: value});

    const regEx = /^([a-zA-Z][a-zA-Z]{2,20})?$/;

    if (value === '') {
      this.setState({errorName: ''});
    } else if (regEx.test(value)) {
      this.setState({errorName: ''});
    } else {
      this.setState({
        errorName:
          'Error: only name is 3-20 characters long and letters characters',
      });
    }
  };

  validateEmail = (value: string) => {
    this.setState({email: value});

    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value === '') {
      this.setState({errorEmail: ''});
    } else if (regEx.test(value)) {
      this.setState({errorEmail: ''});
    } else {
      this.setState({errorEmail: 'Error: invalid e-mail type'});
    }
  };

  isEnableButton = () => {
    return (
      this.state.name !== '' &&
      this.state.email !== '' &&
      this.state.errorName === '' &&
      this.state.errorEmail === ''
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
        title="My profile"
        textButton={isEditMode ? '' : 'Edit'}
        enabledKeyboardAvoiding={!isShowKeyboard}
        onPress={this.editOn}>
        {/* Avatar */}
        <Avatar
          onPress={this.chooseAvatarFromLibrary}
          avatarImg={image}
          disabled={!isEditMode}
          isEditMode={isEditMode}
          avatarStyle={styles.avatarStyle}
        />

        {/* Follow block */}
        {!isEditMode && (
          <FollowBlock followers={followers} following={following} />
        )}

        {/* Form inputs */}
        <CredentialTextInput
          value={name}
          onChangeText={value => this.validateName(value)}
          editable={isEditMode}
          onFocus={this.keyboardShow}
          inputStyle={styles.inputStyle}
          placeholder="Name"
          errorMessage={errorName}
        />
        <CredentialTextInput
          value={email}
          onChangeText={value => this.validateEmail(value)}
          editable={isEditMode}
          onFocus={this.keyboardShow}
          placeholder="Email"
          errorMessage={errorEmail}
        />

        {/* Button */}
        {isEditMode ? (
          <FilledButton
            filledButtonStyle={{
              ...Platform.select({
                ios: {
                  marginTop: isShowKeyboard ? '20%' : '111%',
                },
                android: {
                  marginTop: isShowKeyboard ? 100 : '97%',
                },
              }),
            }}
            title="Update profile"
            onPress={this.handleSubmit}
            disabled={this.isEnableButton() ? false : true}
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

const styles = StyleSheet.create({
  viewStyle: {
    flex: 0.9,
    paddingTop: 60,
    paddingBottom: 50,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  avatarStyle: {
    position: 'absolute',
    top: -35,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
  inputStyle: {
    marginBottom: 15,
  },
  ...Platform.select({
    ios: {
      filledButtonStyle: {
        marginTop: '70%',
      },
    },
    android: {
      filledButtonStyle: {
        marginTop: '56%',
      },
    },
  }),
});

export default ProfileScreen;
