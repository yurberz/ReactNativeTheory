import React, {useState} from 'react';
import {View} from 'react-native';
import Input from '../../components/input/Input';
import {Props} from '../../helpers/ts-helpers/types';
import styles from './styles';

const ColorScreen = ({navigation, route}: Props) => {
  const {value, title} = route.params;

  const [inputValue, setInputValue] = useState<string>(value);

  return (
    <View style={[styles.container, styles.backGround(title)]}>
      <Input
        value={inputValue}
        onChange={val => setInputValue(val)}
        onSubmitEditing={() => {
          navigation.navigate({
            name: 'MainScreen',
            params: {value: inputValue},
          });
        }}
      />
    </View>
  );
};

export default ColorScreen;
