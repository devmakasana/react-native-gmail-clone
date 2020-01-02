import React from 'react';
import {Text, StyleSheet, Linking} from 'react-native';
import {colors, fontWeights} from '../../styles';
import Typography from '../../styles/Typography';
import AppStyles from '../../styles/AppStyles';
import ParsedText from './ParsedText';

const TextView = ({
  style,
  text,
  type,
  color,
  isTextColorWhite = false,
  isClickableLink = false,
  ...props
}) => {
  let textStyle = [style];
  let textValue = text;
  if (type === 'small') {
    textStyle.push(s.small);
  } else if (type === 'span') {
    textStyle.push(s.span);
  } else if (type === 'subTitle') {
    textStyle.push(s.subTitle);
  } else if (type === 'caption') {
    textStyle.push(s.caption);
  } else if (type === 'title') {
    textStyle.push(s.title);
  } else if (type === 'label') {
    textStyle.push(s.label);
  } else if (type === 'heading') {
    textStyle.push(s.heading);
  } else if (type === 'buttonText') {
    textStyle.push(s.buttonText);
  }

  onUrlClick = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert("Don't know how to open URI");
      }
    });
  };

  return isClickableLink ? (
    <ParsedText
      style={[
        textStyle,
        color ? {color: color} : undefined,
        isTextColorWhite ? {color: colors.white} : undefined,
        style,
      ]}
      {...props}
      parse={[{type: 'url', style: AppStyles.url, onPress: this.onUrlClick}]}
      childrenProps={{allowFontScaling: false}}>
      {textValue}
    </ParsedText>
  ) : (
    <Text
      style={[
        textStyle,
        color ? {color: color} : undefined,
        isTextColorWhite ? {color: colors.white} : {},
        style,
      ]}
      {...props}>
      {textValue}
    </Text>
  );
};
const s = StyleSheet.create({
  small: {
    ...Typography.small,
  },
  span: {
    ...Typography.span,
  },
  subTitle: {
    ...Typography.subTitle,
  },
  caption: {
    ...Typography.caption,
  },
  title: {
    ...Typography.title,
  },
  label: {
    ...Typography.label,
  },
  heading: {
    ...Typography.heading,
  },
  buttonText: {
    ...Typography.title,
  },
});
export default TextView;
