import {StyleSheet} from 'react-native';
import {ISortButtonStyles} from '../../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<ISortButtonStyles>({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
  },
  selectedButton: (clicked: boolean) => ({
    backgroundColor: clicked ? 'black' : 'white',
  }),
  text: (clicked: boolean) => ({
    color: clicked ? 'white' : 'black',
  }),
});

export default styles;
