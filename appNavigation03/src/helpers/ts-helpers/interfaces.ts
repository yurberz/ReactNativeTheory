import {ViewStyle} from 'react-native';

export interface IButtonProps {
  title: string;
  onPress(): void;
  buttonStyle?: object;
}

export interface InputProps {
  value: string;
  onChange(value: string): void;
  onSubmitEditing?(): void;
}

export interface IStyles {
  container: ViewStyle;
  backGround(value: string | undefined): ViewStyle;
}
