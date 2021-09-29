import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
  headerTitleStyle: {
    flex: 0.6,
  },
  rowFront: {
    backgroundColor: '#f8f8ff',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  rowBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    backgroundColor: 'rgb(181, 182, 221)',
    borderRadius: 8,
  },
  backRightBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fa8072',
    borderWidth: 1,
    borderRadius: 15,
  },
});

export default styles;
