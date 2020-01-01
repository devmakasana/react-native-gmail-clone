import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {headerIconSize} from '../styles/dimensions';

const Icon = ({
  name,
  color,
  isFeather = true,
  type = 'feather',
  size,
  style,
}) => {
  if (type === 'feather' || isFeather) {
    return (
      <Feather
        style={style}
        name={name}
        size={size ? size : headerIconSize}
        color={color}
      />
    );
  } else if (type === 'ionic') {
    return (
      <Ionicons
        style={style}
        name={name}
        size={size ? size : headerIconSize}
        color={color}
      />
    );
  } else if (String(type).toLowerCase() === 'fontawesome') {
    return (
      <FontAwesome
        style={style}
        name={name}
        size={size ? size : headerIconSize}
        color={color}
      />
    );
  }

  return (
    <Ionicons
      style={style}
      name={name}
      size={size ? size : headerIconSize}
      color={color}
    />
  );
};
export default Icon;
