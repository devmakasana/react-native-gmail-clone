import React from 'react';
import {View, ViewPropTypes, StyleSheet} from 'react-native';
import T from 'prop-types';
import {colors} from '../../../styles';
import Icon from '../../Icon';
import Touchable from '../Touchable';

const IconButton = ({
  style,
  size = 42,
  isFeatherIcon = false,
  icon = 'md-add',
  iconSize = 24,
  iconColor = colors.white,
  iconType = 'feather',
  ...props
}) => {
  {
    return (
      <View style={[style]}>
        <View style={{borderRadius: size / 2, overflow: 'hidden'}}>
          <Touchable {...props}>
            <View
              style={[
                s.container,
                {
                  borderRadius: size / 2,
                  width: size,
                  height: size,
                },
              ]}>
              <Icon
                isFeather={isFeatherIcon}
                name={icon}
                size={iconSize}
                color={iconColor}
              />
            </View>
          </Touchable>
        </View>
      </View>
    );
  }
};

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

IconButton.propTypes = {
  style: ViewPropTypes.style,
  size: T.number,
  isFeatherIcon: T.bool,
  icon: T.string,
  iconSize: T.number,
  iconColor: T.string,
};
export default IconButton;
