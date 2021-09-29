import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageHeight = 300;

const styles = StyleSheet.create({
  imageCellContainerStyle: {
    paddingVertical: 20,
  },
  imageStyle: {
    width: screenWidth,
    height: imageHeight,
  },
});

export default styles;
