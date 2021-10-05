import {SyntheticEvent} from 'react';
import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';
import {TArgFetchPhotos, TPhoto, TPhotoModel, TSortButton} from './types';

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
  headerTitleStyle: TextStyle;
  headerChildrenBlockStyles: ViewStyle;
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
  viewStyle?: object;
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
  title: string;
  titleStyle: object;
  headerChildrenBlockStyles?: object;
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

export interface ISubscriberItem {
  id: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
  isFollowing: boolean;
}

export interface IAddPeopleItem extends Omit<ISubscriberItem, 'isFollowing'> {
  isSelected: boolean;
}

export interface ISubscriberCellProps {
  subscriber: ISubscriberItem | IAddPeopleItem;
  onPressFollowButton?(): void;
  appendComponent?: JSX.Element;
}

export interface IAddPeople {
  id?: string;
  title: string;
  data: IAddPeopleItem[];
}

export interface ISearchInputProps {
  value: string;
  placeholder: string;
  onChangeText(text: string): void;
  onFocus?(evt: SyntheticEvent): void;
  onBlur?(): void;
}

export interface IHiddenItemProps {
  onPress(): void;
}

export interface IApiImage<T> {
  fetchPhotos(arg: TArgFetchPhotos): Promise<Array<T>>;
  searchPhotos(arg: object): Promise<T>;
  likePhoto(value: string[]): Promise<T>;
  unlikePhoto(value: string[]): Promise<T>;
}

export interface IPhotoDataResponse {
  photo: TPhoto;
  id: string;
  user?: {
    name: string;
    profile_image?: {small?: string};
  };
  urls?: {small: string};
  liked_by_user: boolean;
  likes: number;
}

export interface ISearchDataResponse {
  results: IPhotoDataResponse[];
}

export interface IHeaderImageCellProps {
  profileUrl?: string;
  authorName?: string;
}

export interface IFooterImageCellProps {
  liked_by_user?: boolean;
  likes?: number;
  onPress(): void;
}

export interface ImageCellProps {
  imageUrl?: string;
  headerProps: IHeaderImageCellProps;
  footerProps: IFooterImageCellProps;
}

export interface IRequestParams {
  body?: object;
  token?: string;
  urlParams?: object;
  params?: string[];
}

export interface IPhotosState {
  items: TPhotoModel[];
  loading: boolean;
  error: string | undefined;
}

export interface ISortBarProps {
  data: TSortButton[];
  onValueChange(value: string): void;
}

export interface ISortButtonProps {
  cb(value: number): void;
  text: string;
  id: number;
  selectedIndex: number;
}

export interface ISortButtonStyles {
  button: ViewStyle;
  selectedButton(value: boolean): ViewStyle;
  text(value: boolean): TextStyle;
}
