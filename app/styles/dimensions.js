import {Platform, Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const indent = 16;
export const halfindent = indent / 2;
export const lessIndent = indent - 3;
export const dobleIndent = indent * 2;

export const borderRadius = 12;
export const ModalBGborderRadius = 8;

export const headerIconSize = 24;

export const InputVerticalPadding = Platform.OS === 'ios' ? 11 : 6;
export const borderWidth = Platform.OS === 'android' ? 1 : 0.5;

export const WIN_WIDTH = Dimensions.get('window').width,
  WIN_HEIGHT = Dimensions.get('window').height;
