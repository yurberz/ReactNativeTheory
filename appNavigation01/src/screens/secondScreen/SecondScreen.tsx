import React from 'react';
import {View} from 'react-native';
import Button from '../../components/button/Button';
import {Props} from '../../helpers/ts-helpers/types';
import styles from './styles';

const SecondScreen = ({navigation}: Props) => {
  return (
    <View style={styles.containerStyle}>
      <Button
        title="Push Second"
        onPress={() => navigation.navigate('ThirdScreen')}
      />
    </View>
  );
};

export default SecondScreen;
