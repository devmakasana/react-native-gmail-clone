import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Typography from '../styles/Typography';
import {indent} from '../styles/dimensions';
import colors from '../styles/colors';

const Input = ({
  style,
  containerStyle,
  value,
  onChangeText,
  placeholder,
  onPressIcon,
  leftIconName,
  rightIconName = 'eye-off',
  loading,
  isIconLeft = false,
  isIconRight = false,
  ...props
}) => (
  <View style={[containerStyle]}>
    <TextInput
      underlineColorAndroid="transparent"
      style={s.formControlInput}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.gray}></TextInput>
  </View>
);

const s = StyleSheet.create({
  formControlInput: {
    ...Typography.heading,
  },
});

export default Input;
