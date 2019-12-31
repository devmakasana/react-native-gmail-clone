import {StyleSheet} from 'react-native';
import colors from './colors';
import {
  indent,
  halfindent,
  borderWidth,
  lessIndent,
  borderRadius,
} from './dimensions';
import Typography from './Typography';
import {scale, scaleVertical} from '../utils/scale';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';

const AppStyles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rootHorizontalPad: {
    paddingHorizontal: scale(indent),
  },
  rootWithoutPadding: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

export default AppStyles;
