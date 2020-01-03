import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {headerIconSize} from '../styles/dimensions';
const Icon = ({name, color, type = 'feather', size, style}) => {
  if (type === 'feather') {
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
  } else if (String(type).toLowerCase() === 'materialcommunityicons') {
    return (
      <MaterialCommunityIcons
        style={style}
        name={name}
        size={size ? size : headerIconSize}
        color={color}
      />
    );
  } else if (String(type).toLowerCase() === 'materialicons') {
    return (
      <MaterialIcons
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
