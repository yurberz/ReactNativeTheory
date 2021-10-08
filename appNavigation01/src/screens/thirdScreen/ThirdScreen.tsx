import React from 'react';
import {View} from 'react-native';
import Button from '../../components/button/Button';
import {Props} from '../../helpers/ts-helpers/types';
import styles from './styles';

const ThirdScreen = ({navigation}: Props) => {
  return (
    <View style={styles.containerStyle}>
      <Button title="Go To Root" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default ThirdScreen;
