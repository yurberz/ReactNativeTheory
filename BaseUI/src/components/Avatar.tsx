/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface IAvatarProps {
  avatarStyle?: object;
  avatarImg: object;
  onPress(): void;
  disabled: boolean;
  isEditMode: boolean;
}

class Avatar extends Component<IAvatarProps, {}> {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
        style={this.props.avatarStyle}>
        <ImageBackground
          style={styles.imageBackgroud}
          imageStyle={{borderRadius: 15}}
          source={this.props.avatarImg}>
          {this.props.isEditMode && (
            <FontAwesome
              name="camera"
              size={20}
              color="#ffffff"
              style={styles.cameraIcon}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroud: {
    width: 80,
    height: 80,
  },
  cameraIcon: {
    position: 'absolute',
    right: 7,
    bottom: 5,
    opacity: 0.5,
  },
});

export default Avatar;
