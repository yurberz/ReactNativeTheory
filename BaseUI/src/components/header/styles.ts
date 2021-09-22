import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    ...Platform.select({
      ios: {
        marginTop: '18%',
      },
      android: {
        marginTop: '7%',
      },
    }),
  },
  defaultTitleStyle: {
    fontSize: 17,
    color: '#ffffff',
  },
});

export default styles;
