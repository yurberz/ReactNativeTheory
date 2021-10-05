import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {IHeaderImageCellProps} from '../../../helpers/ts-helpers/interfaces';

const ImageCellHeader: React.FC<IHeaderImageCellProps> = ({
  profileUrl,
  authorName,
}: IHeaderImageCellProps) => {
  return (
    <View style={styles.headerContainerStyle}>
      <Image
        style={styles.profileImageStyle}
        source={
          profileUrl
            ? {uri: profileUrl}
            : {
                uri: 'https://cdn.pixabay.com/photo/2017/12/16/06/41/avatar-3022215_960_720.jpg',
              }
        }
      />

      <Text style={styles.nameStyle}>{authorName ?? 'Incognito'}</Text>
    </View>
  );
};

export default ImageCellHeader;
