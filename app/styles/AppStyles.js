import {StyleSheet} from 'react-native';
import colors from './colors';
import Typography from './Typography';
import {scale, scaleVertical} from '../utils/scale';
import {indent, lessIndent} from './dimensions';

const AppStyles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  root: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  rootWithoutPadding: {
    paddingTop: 0,
    paddingHorizontal: 0,
  },
});

export default AppStyles;
