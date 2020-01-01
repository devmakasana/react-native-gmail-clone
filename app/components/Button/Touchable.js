import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const Touchable = ({
  onPress,
  ButtonText = '',
  children,
  style,
  animationStyle,
  isLoading = false,
  spinnerDotSize = 8,
  spinnerType = 'DotIndicator',
  disabled = false,
  textStyle,
  ...props
}) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={onPress} disabled={disabled} {...props}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled} {...props}>
        <View style={style}>{children}</View>
      </TouchableOpacity>
    );
  }
};

const s = StyleSheet.create({});
export default Touchable;
