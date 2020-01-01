import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {fontWeights, colors} from '../styles';
import TextView from './TextView/TextView';
import {indent, halfindent, lessIndent} from '../styles/dimensions';
import {scale} from '../utils/scale';

class SummaryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, text} = this.props;
    return (
      <View style={s.summaryItemWrapper}>
        <TextView
          type={'body-one'}
          text={title}
          style={s.summaryItemTextStyle}
        />
        <TextView
          style={s.summaryAmountText}
          type={'body'}
          text={text}
          color={colors.gray}
        />
      </View>
    );
  }
}
const s = StyleSheet.create({
  summaryItemWrapper: {
    paddingHorizontal: scale(indent),
    paddingVertical: scale(halfindent - 2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItemTextStyle: {
    fontFamily: 'CircularStd-Medium',
    color: colors.darkColor,
  },
  summaryAmountText: {
    fontFamily: 'Rubik-Regular',
  },
});

export default SummaryItem;
