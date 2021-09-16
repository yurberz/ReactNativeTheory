import React, {Component} from 'react';

import {Text, StyleSheet, View, Platform} from 'react-native';

import TextButton from './TextButton';

interface IHeader {
  title?: string;
  isEditMode?: boolean;
  onPress?(): void;
}

class Header extends Component<IHeader, {}> {
  render() {
    return (
      <View style={styles.headerContainerStyle}>
        <Text style={styles.title}>{this.props.title}</Text>

        <TextButton
          title={this.props.isEditMode ? '' : 'Edit'}
          onPress={this.props.onPress}
          color="#ffffff"
          textButtonStyle={styles.headerButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
});

export default Header;
