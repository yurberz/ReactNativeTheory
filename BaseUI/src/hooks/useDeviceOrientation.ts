import {useWindowDimensions} from 'react-native';
import {OrientationType} from '../helpers/ts-helpers/enums';

const getCurrentOrientalType = (width: number, height: number) => {
  return height > width ? OrientationType.portrait : OrientationType.landscape;
};

const useDeviceOrientation = () => {
  const window = useWindowDimensions();

  return getCurrentOrientalType(window.width, window.height);
};

export default useDeviceOrientation;
