import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
const likeImage = require('../../../assets/images/likes.png');
import {IFooterImageCellProps} from '../../../helpers/ts-helpers/interfaces';

const ImageCellFooter: React.FC<IFooterImageCellProps> = ({
  likes,
  onPress,
}: IFooterImageCellProps) => {
  return (
    <View style={styles.footerContainerStyle}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Image style={styles.likeImageStyle} source={likeImage} />
      </TouchableOpacity>

      <Text style={styles.likesStyle}>{likes ?? 'Incognito'}</Text>
    </View>
  );
};

export default ImageCellFooter;
