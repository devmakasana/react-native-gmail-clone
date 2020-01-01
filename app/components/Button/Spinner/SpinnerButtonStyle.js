import {StyleSheet} from 'react-native';
import {WIN_WIDTH} from '../../../constants/constant';

export default StyleSheet.create({
  defaultButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#25CAC6',
  },
  defaultSpinnerContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedViewStyle: {
    width: WIN_WIDTH - 65,
  },
});
