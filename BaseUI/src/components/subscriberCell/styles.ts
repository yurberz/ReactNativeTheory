import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 67,
  },
  image: {
    width: 47,
    height: 47,
    borderRadius: 8,
  },
  leftSideBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBlock: {
    marginLeft: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: 'rgb(77, 81, 128)',
  },
  description: {
    fontSize: 12,
    color: 'rgb(181, 182, 221)',
  },
  defaultButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 92,
    height: 29,
    borderRadius: 14,
  },
  followButton: {
    backgroundColor: 'rgb(64, 80, 164)',
  },
  followingButton: {
    backgroundColor: 'rgba(190, 198, 255, 0.3)',
  },
  buttonText: {
    fontSize: 12,
  },
  followText: {
    color: '#ffffff',
  },
  followingText: {
    color: 'rgb(77, 91, 177)',
  },
});

export default styles;
