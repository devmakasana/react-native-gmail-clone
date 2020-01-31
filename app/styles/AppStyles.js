import {StyleSheet} from 'react-native';
import colors from './colors';
import Typography from './Typography';

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
