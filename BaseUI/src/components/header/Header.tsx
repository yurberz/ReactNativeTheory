import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {IHeaderProps} from '../../helpers/ts-helpers/interfaces';

class Header extends Component<IHeaderProps> {
  render() {
    return (
      <View style={styles.headerContainerStyle}>
        <Text style={{...styles.defaultTitleStyle, ...this.props.titleStyle}}>
          {this.props.title}
        </Text>

        <View style={this.props.headerChildrenBlockStyles}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default Header;
