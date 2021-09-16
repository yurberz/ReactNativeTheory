import React, {Component} from 'react';

import {StyleSheet, View, Platform} from 'react-native';

import SocialNetworkButton from './SocialNetworkButton';

interface ISocialNetworkButtonsFormProps {
  buttonsContainerStyle?: object;
}

class SocialNetworkButtonsForm extends Component<
  ISocialNetworkButtonsFormProps,
  {}
> {
  render() {
    return (
      <View
        style={{...styles.containerStyle, ...this.props.buttonsContainerStyle}}>
        <SocialNetworkButton
          buttonStyle={styles.buttonStyle}
          iconName="facebook"
        />
        <SocialNetworkButton
          buttonStyle={styles.buttonStyle}
          iconName="google-plus"
        />
        {Platform.OS === 'ios' && <SocialNetworkButton iconName="apple" />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginRight: 11,
  },
});

export default SocialNetworkButtonsForm;
