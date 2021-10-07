import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import {Props} from '../../helpers/ts-helpers/types';
import styles from './styles';

const MainScreen = ({navigation, route}: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setInputValue(route.params?.value);
  }, [route.params?.value]);

  return (
    <View style={styles.container}>
      <Input value={inputValue} onChange={value => setInputValue(value)} />

      <Button
        title="Push Red"
        onPress={() =>
          navigation.navigate('ColorScreen', {
            value: inputValue,
            title: 'Red',
          })
        }
        buttonStyle={styles.redButton}
      />
      <Button
        title="Push Green"
        onPress={() =>
          navigation.navigate('ColorScreen', {
            value: inputValue,
            title: 'Green',
          })
        }
        buttonStyle={styles.greenButton}
      />
      <Button
        title="Push Blue"
        onPress={() =>
          navigation.navigate('ColorScreen', {
            value: inputValue,
            title: 'Blue',
          })
        }
      />
    </View>
  );
};

export default MainScreen;
