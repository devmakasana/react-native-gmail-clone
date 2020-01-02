import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {headerIconSize} from '../styles/dimensions';

const Icon = ({name, color, isFeather = true, size, style}) => {
  return isFeather ? (
    <Feather
      style={style}
      name={name}
      size={size ? size : headerIconSize}
      color={color}
    />
  ) : (
    <Ionicons
      style={style}
      name={name}
      size={size ? size : headerIconSize}
      color={color}
    />
  );
};
export default Icon;
