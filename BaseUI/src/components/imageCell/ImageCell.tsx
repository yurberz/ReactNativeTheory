import React from 'react';
import {Image, View} from 'react-native';
import {ImageCellProps} from '../../helpers/ts-helpers/interfaces';
import styles from './styles';
import ImageCellHeader from './imageCellHeader/ImageCellHeader';
import ImageCellFooter from './imageCellFooter/ImageCellFooter';

const ImageCell: React.FC<ImageCellProps> = ({
  imageUrl,
  headerProps,
  footerProps,
}: ImageCellProps) => {
  return (
    <View style={styles.imageCellContainerStyle}>
      <ImageCellHeader {...headerProps} />

      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={{uri: imageUrl}}
      />

      <ImageCellFooter {...footerProps} />
    </View>
  );
};

export default ImageCell;
