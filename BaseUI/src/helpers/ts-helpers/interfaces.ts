import {ViewStyle} from 'react-native';

export interface IProfileScreenState {
  name: string;
  email: string;
  followers: number;
  following: number;
  image: object;
  isEditMode: boolean;
  isShowKeyboard: boolean;
  errorName: string | null;
  errorEmail: string | null;
}

export interface IUserProfile {
  name: string;
  email: string;
  image: object;
}

export interface IStyles {
  viewStyle: ViewStyle;
  avatarStyle: ViewStyle;
  inputStyle: ViewStyle;
  filledButtonStyle: ViewStyle;
  updateButtonStyle(value: boolean): ViewStyle;
}

export interface ILoginScreenState {
  email: string;
  password: string;
}

export interface IAvatarProps {
  avatarStyle?: object;
  avatarImg: object;
  onPress(): void;
  isEditMode: boolean;
}

export interface IBackgroundFormProps {
  viewStyle: object;
  enabledKeyboardAvoiding?: boolean;
  prependComponent?: JSX.Element;
  appendComponent?: JSX.Element;
}

export interface ICredentialTextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  inputStyle?: object;
  value?: string;
  editable?: boolean;
  onFocus?(): void;
  onChangeText?(text: string): void;
  errorMessage?: string | null;
}

export interface IFilledButtonProps {
  title: string;
  onPress(): void;
  filledButtonStyle?: object;
  disabled?: boolean;
}

export interface IFollowBlockProps {
  followers: number;
  following: number;
}

export interface IHeaderProps {
  title?: string;
  isEditMode?: boolean;
  onPress?(): void;
}

export interface ISocialNerworkButtonProps {
  iconName: string;
  buttonStyle?: object;
}

export interface ISocialNetworkButtonsFormProps {
  buttonsContainerStyle?: object;
}

export interface ITextButtonProps {
  title: string;
  color: string;
  align?: 'flex-start' | 'center' | 'flex-end';
  textButtonStyle?: object;
  onPress?(): void | boolean;
}
