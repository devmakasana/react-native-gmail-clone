import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Spinner from './Spinner';
import styles from './SpinnerButtonStyle';

const CustomButton = props => {
  const {
    animationType,
    animationStyle,
    buttonStyle,
    onPress,
    isLoading,
    children,
  } = props;
  return (
    <Animatable.View
      animation={animationType || 'fadeIn'}
      animationStyle={animationStyle}>
      <TouchableOpacity
        {...props}
        style={[styles.defaultButtonStyle, buttonStyle]}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </Animatable.View>
  );
};

const SpinnerButton = props => {
  const {
    animationType,
    animationStyle,
    buttonStyle,
    spinnerColor,
    spinnerType,
    isLoading,
    onPress,
    children,
    indicatorCount,
    size,
    spinnerOptions,
  } = props;
  if (isLoading) {
    return (
      <Spinner
        {...props}
        spinnerColor={spinnerColor || 'rgb(255, 255, 255)'}
        spinnerType={spinnerType}
        buttonStyle={buttonStyle}
        count={indicatorCount}
        spinnerOptions={spinnerOptions}
        size={size}
        isLoading={isLoading}
        animationType={animationType}
        animationStyle={animationStyle}
      />
    );
  }
  return (
    <CustomButton
      {...props}
      buttonStyle={buttonStyle}
      onPress={onPress}
      children={children}
      isLoading={isLoading}
      animationType={animationType}
      animationStyle={animationStyle}
    />
  );
};

export default SpinnerButton;
