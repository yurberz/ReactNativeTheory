import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './followBlockStyles';
import {IFollowBlockProps} from '../../helpers/ts-helpers/interfaces';

class FollowBlock extends Component<IFollowBlockProps, {}> {
  render() {
    return (
      <View style={styles.followContainer}>
        <View style={[styles.block, styles.blockAlt]}>
          <Text style={styles.textNumber}>{this.props.followers}</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.textNumber}>{this.props.following}</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>
    );
  }
}

export default FollowBlock;
