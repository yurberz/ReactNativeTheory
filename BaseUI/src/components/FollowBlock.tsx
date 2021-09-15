import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

interface IFollowBlockProps {
  followers: number;
  following: number;
}

class FollowBlock extends Component<IFollowBlockProps> {
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

const styles = StyleSheet.create({
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgb(181,182,221)',
  },

  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  blockAlt: {
    borderRightWidth: 1,
    borderColor: 'rgb(181,182,221)',
  },
  textNumber: {
    fontSize: 26,
    color: 'rgb(255, 103, 97)',
  },
  text: {
    fontSize: 15,
  },
});

export default FollowBlock;
