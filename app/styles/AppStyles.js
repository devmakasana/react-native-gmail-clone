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
  rootWithoutPadding: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  headerStyle: {
    backgroundColor: colors.backgroundColor,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    ...Typography.header,
    color: colors.secondary,
    marginHorizontal: 0,
  },
});

export default AppStyles;
