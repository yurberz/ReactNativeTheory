import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import SocialNetworkButton from '../socialNetworkButton/SocialNetworkButton';
import styles from './socialNetworkButtonsFormStyles';
import {ISocialNetworkButtonsFormProps} from '../../helpers/ts-helpers/interfaces';

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

export default SocialNetworkButtonsForm;
