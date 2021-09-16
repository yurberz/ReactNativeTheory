import React, {Component} from 'react';

import {
  View,
  ImageBackground,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

interface IBackgroundFormProps {
  viewStyle: object;
  enabledKeyboardAvoiding?: boolean;
  prependComponent?: JSX.Element;
  appendComponent?: JSX.Element;
}

export default class BackgroundForm extends Component<
  IBackgroundFormProps,
  {}
> {
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
          <View style={this.props.viewStyle}>{this.props.children}</View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewStyle: {
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
