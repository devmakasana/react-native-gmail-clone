import React from 'react';
import T from 'prop-types';
import {StyleSheet, View, Image, ViewPropTypes, Text} from 'react-native';
import Typography from '../styles/Typography';
import {indent, halfindent} from '../styles/dimensions';
import {colors} from '../styles';
import {scaleVertical} from '../utils/scale';

const EmptyContent = ({
  containerStyle,
  image,
  text = 'No Data Found',
  subText,
  imageStyle,
}) => (
  <View style={[s.container, containerStyle]}>
    {!!image && (
      <View style={s.imageWrapper}>
        <Image
          style={[s.image, imageStyle]}
          resizeMode="contain"
          source={image}
        />
      </View>
    )}
    {!!text && <Text style={s.emptyText}>{text}</Text>}
    {!!subText && <Text style={s.subText}>{subText}</Text>}
  </View>
);

EmptyContent.propTypes = {
  text: T.string,
  subText: T.string,
  image: T.any,
  containerStyle: ViewPropTypes.style,
};

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: halfindent,
  },
  emptyText: {
    ...Typography.body,
    marginTop: scaleVertical(indent),
    textAlign: 'center',
    color: colors.greyDarkOpacity,
  },
  subText: {
    ...Typography.caption,
    textAlign: 'center',
    color: colors.gray,
    marginTop: scaleVertical(3),
  },
  image: {
    height: 140,
  },
  imageWrapper: {
    alignItems: 'center',
  },
});

export default EmptyContent;
