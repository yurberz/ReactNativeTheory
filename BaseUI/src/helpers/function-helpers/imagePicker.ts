import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export const chooseAvatarFromLibrary = (
  avatar: string,
  setAvatar: Function,
) => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  }).then(img => {
    const imageUri = Platform.OS === 'ios' ? img.sourceURL : img.path;

    let image: any = avatar;
    image = imageUri;

    setAvatar(image);
  });
};
