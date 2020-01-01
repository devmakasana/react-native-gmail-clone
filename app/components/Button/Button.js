import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {colors} from '../../styles';
import {indent} from '../../styles/dimensions';
import SpinnerButton from './Spinner/SpinnerButton';
import Icon from '../Icon';
import TextView from '../TextView/TextView';

const Button = ({
  onPress,
  ButtonText = '',
  children,
  style,
  containerStyle,
  animationStyle,
  isLoading = false,
  spinnerDotSize = 8,
  spinnerType = 'DotIndicator',
  disabled = false,
  textStyle,
  isIcon = false,
  iconName = 'arrow-right',
  ...props
}) => {
  return (
    <View style={[containerStyle]}>
      <SpinnerButton
        animationStyle={[animationStyle]}
        buttonStyle={[s.fullWidthButton, style]}
        size={spinnerDotSize}
        disabled={disabled}
        isLoading={isLoading}
        onPress={onPress}
        spinnerType={spinnerType}
        indicatorCount={4}
        activeOpacity={0.7}
        {...props}>
        <TextView
          type={'button-text'}
          text={ButtonText}
          style={textStyle}
          isTextColorWhite={true}
        />
        {isIcon && (
          <Icon
            style={[s.buttonIcon]}
            name={iconName}
            size={24}
            color={colors.white}
          />
        )}
      </SpinnerButton>
    </View>
  );
};

const s = StyleSheet.create({
  fullWidthButton: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: indent,
    borderRadius: 12,
  },
  buttonIcon: {
    position: 'absolute',
    top: -2,
    right: 0,
    padding: indent,
    marginLeft: 'auto',
  },
});
export default Button;
