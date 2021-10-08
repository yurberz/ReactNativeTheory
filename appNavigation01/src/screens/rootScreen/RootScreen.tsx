import React from 'react';
import {View} from 'react-native';
import Button from '../../components/button/Button';
import styles from './styles';
import {Props} from '../../helpers/ts-helpers/types';

const RootScreen = ({navigation}: Props) => {
  return (
    <View style={styles.containerStyle}>
      <Button
        title="Push First"
        onPress={() => navigation.navigate('SecondScreen')}
      />
    </View>
  );
};

export default RootScreen;
