import {StackScreenProps} from '@react-navigation/stack';

export type StackParamList = {
  RootScreen: undefined;
  SecondScreen: undefined;
  ThirdScreen: undefined;
};

export type Props = StackScreenProps<StackParamList, 'RootScreen'>;
