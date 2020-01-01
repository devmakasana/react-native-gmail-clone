import React from 'react';
import {Platform, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../styles';
import Icon from './Icon';

const NavigationOptions = ({
  title,
  navigation,
  isBack = false,
  headerTitle = null,
  headerLeft,
  headerRight,
  headerStyle,
  ...props
}) => {
  return {
    title: title,
    headerTitle: headerTitle,
    headerLeft:
      Platform.OS == 'ios' && isBack ? (
        <TouchableOpacity
          style={[s.wrapper]}
          onPress={() => navigation.goBack()}>
          <Icon name={'arrow-left'} size={22} color={colors.primary} />
        </TouchableOpacity>
      ) : (
        headerLeft
      ),
    headerTintColor: Platform.OS == 'android' ? colors.white : null,
    headerStyle: {
      backgroundColor: Platform.OS == 'android' ? colors.primary : null,
      ...headerStyle,
    },
    headerTitleStyle: {
      color: Platform.OS == 'android' ? colors.white : null,
    },
    headerRight: headerRight,
    ...props,
  };
};

const s = StyleSheet.create({
  wrapper: {
    padding: 5,
    marginLeft: 15,
  },
  headerActionWrapper: {
    marginHorizontal: 10,
    padding: 2,
  },
});
export default NavigationOptions;
