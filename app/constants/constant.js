import {Dimensions, Platform, StatusBar} from 'react-native';

export const DateFormat = 'MM-DD-YYYY';

export const WIN_WIDTH = Dimensions.get('window').width,
  WIN_HEIGHT = Dimensions.get('window').height;

export const isIOS = Platform.OS === 'ios' ? true : false;
export const isAndroid = Platform.OS === 'android' ? true : false;
export const isSmallDevice = WIN_HEIGHT <= 568 ? true : false;

export const IS_IPHONE_X = WIN_HEIGHT === 812 || WIN_HEIGHT === 896;
export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : StatusBar.currentHeight;
