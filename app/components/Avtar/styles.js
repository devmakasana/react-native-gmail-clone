import {StyleSheet} from 'react-native';
import {colors, fontWeights} from '../../styles';
import {scale} from '../../utils/scale';

export default StyleSheet.create({
  userImage: {
    borderRadius: 20,
    width: 42,
    height: 42,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    overflow: 'hidden',
  },

  userLetter: {
    fontWeight: fontWeights.medium,
    color: colors.white,
  },
});
