import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgb(181,182,221)',
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  blockAlt: {
    borderRightWidth: 1,
    borderColor: 'rgb(181,182,221)',
  },
  textNumber: {
    fontSize: 26,
    color: 'rgb(255, 103, 97)',
  },
  text: {
    fontSize: 15,
  },
});

export default styles;
