import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
  MainScreen: {
    value: string;
    title?: string;
  };
  ColorScreen: {
    value: string;
    title: string;
  };
};

export type Props = NativeStackScreenProps<StackParamList, 'MainScreen'>;
