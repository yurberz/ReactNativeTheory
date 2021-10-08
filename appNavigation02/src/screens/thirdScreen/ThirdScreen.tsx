import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/button/Button';
import {Props} from '../../helpers/ts-helpers/types';
import styles from './styles';

const ThirdScreen = ({navigation, route}: Props) => {
  const {title} = route.params;

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title="Close"
        onPress={() => navigation.goBack()}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

export default ThirdScreen;
