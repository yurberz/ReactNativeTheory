import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorMsg: {
    fontSize: 10,
    color: '#ff0000',
  },
  textInputStyle: {
    paddingVertical: 8,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgb(181,182,221)',
    fontSize: 15,
  },
});

export default styles;
