import {StyleSheet} from 'react-native';
import {IStyles} from '../../helpers/ts-helpers/interfaces';
const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  backGround: (value: string) => {
    if (value === 'Red') {
      return {
        backgroundColor: 'red',
      };
    }
    if (value === 'Green') {
      return {
        backgroundColor: 'green',
      };
    }
    if (value === 'Blue') {
      return {
        backgroundColor: 'blue',
      };
    }
  },
});

export default styles;
