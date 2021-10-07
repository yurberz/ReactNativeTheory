import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
  RootScreen: {title: string};
  SecondScreen: undefined;
  ThirdScreen: {title: string};
  FourthScreen: undefined;
  FifthScreen: undefined;
  FourthStackScreen: undefined;
};

export type Props = NativeStackScreenProps<StackParamList, 'RootScreen'>;
