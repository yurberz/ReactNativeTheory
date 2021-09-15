import React, {Component} from 'react';

import {
  View,
  ImageBackground,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';

interface IBackgroundFormProps {
  title?: string;
  textButton?: string;
  viewStyle: object;
  onPress?(): void;
  enabledKeyboardAvoiding?: boolean;
}

export default class BackgroundForm extends Component<IBackgroundFormProps> {
  render() {
    return (
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        style={styles.backgroundImage}>
        <StatusBar barStyle="light-content" />

        <View style={styles.headerContainerStyle}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TouchableOpacity
            onPress={this.props.onPress}
            activeOpacity={0.8}
            style={styles.headerButton}>
            <Text style={styles.textButton}>{this.props.textButton}</Text>
          </TouchableOpacity>
        </View>

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
  headerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    width: '100%',
    ...Platform.select({
      ios: {
        marginTop: '18%',
      },
      android: {
        marginTop: '7%',
      },
    }),
  },
  title: {
    flex: 0.5,
    fontSize: 17,
    color: '#ffffff',
  },
  headerButton: {
    flex: 0.1,
  },
  textButton: {
    fontSize: 13,
    color: '#ffffff',
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
