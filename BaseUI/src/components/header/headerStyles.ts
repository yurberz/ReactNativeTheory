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
  title: {
    flex: 0.5,
    fontSize: 17,
    color: '#ffffff',
  },
  headerButton: {
    flex: 0.1,
  },
});

export default styles;
