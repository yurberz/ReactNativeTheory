import React from 'react';
import {View} from 'react-native';
import Button from '../../components/button/Button';
import styles from './styles';
import {Props} from '../../helpers/ts-helpers/types';

const RootScreen = ({navigation}: Props) => {
  return (
    <View style={styles.containerStyle}>
      <Button
        title="Push 2 Screen"
        onPress={() => navigation.navigate('SecondScreen')}
      />
      <Button
        title="Modal 3 Screen"
        onPress={() =>
          navigation.navigate('ThirdScreen', {
            title: 'Third UIViewController',
          })
        }
      />
    </View>
  );
};

export default RootScreen;
