import React from 'react';
import {View} from 'react-native';
import Button from '../../components/button/Button';
import {Props} from '../../helpers/ts-helpers/types';
import styles from './styles';

const FourthScreen = ({navigation}: Props) => {
  return (
    <View style={styles.containerStyle}>
      <Button
        title="Push 5 Screen"
        onPress={() => navigation.navigate('FifthScreen')}
      />
      <Button
        title="Close"
        onPress={() => navigation.goBack()}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

export default FourthScreen;
