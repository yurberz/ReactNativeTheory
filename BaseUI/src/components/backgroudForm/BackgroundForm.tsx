import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import {IBackgroundFormProps} from '../../helpers/ts-helpers/interfaces';

class BackgroundForm extends Component<IBackgroundFormProps> {
  render() {
    return (
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        style={styles.backgroundImage}>
        <StatusBar barStyle="light-content" />

        <View>{this.props.prependComponent}</View>

        <KeyboardAvoidingView
          style={styles.backgroundImage}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled={this.props.enabledKeyboardAvoiding}>
          <View style={{...styles.defaultViewStyle, ...this.props.viewStyle}}>
            {this.props.children}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default BackgroundForm;
