import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TextButton from '../textButton/TextButton';
import styles from './headerStyles';
import {IHeaderProps} from '../../helpers/ts-helpers/interfaces';

class Header extends Component<IHeaderProps, {}> {
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

export default Header;
