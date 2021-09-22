import {StyleSheet, Dimensions} from 'react-native';
import {IStyles} from '../../helpers/ts-helpers/interfaces';

const {height} = Dimensions.get('window');

const KEYBOARD_SHOW_MARGIN_TOP = height > 800 ? height - 750 : height - 687;
const KEYBOARD_HIDE_MARGIN_TOP = height > 800 ? height - 440 : height - 377;

const styles = StyleSheet.create<IStyles>({
  headerTitleStyle: {
    flex: 0.5,
  },
  headerChildrenBlockStyles: {
    flex: 0.1,
  },
  viewStyle: {
    flex: 0.9,
    paddingTop: 60,
  },
  avatarStyle: {
    position: 'absolute',
    top: -35,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
  inputStyle: {
    marginBottom: 15,
  },
  filledButtonStyle: {
    marginTop: height > 800 ? '70%' : '56%',
  },
  updateButtonStyle: (isShowKeyboard: boolean) => ({
    marginTop: isShowKeyboard
      ? KEYBOARD_SHOW_MARGIN_TOP
      : KEYBOARD_HIDE_MARGIN_TOP,
  }),
});

export default styles;
