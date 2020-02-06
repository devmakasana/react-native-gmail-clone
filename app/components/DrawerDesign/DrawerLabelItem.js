import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Touchable} from '../Button';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../../assets/svg';
import TextView from '../TextView/TextView';
import {colors} from '../../styles';
import {lessIndent} from '../../styles/dimensions';

class DrawerLabelItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {labelIcon, labelName, badge, newBadge, onPress, style} = this.props;
    return (
      <View style={[s.itemWrapper, style]}>
        <Touchable style={s.menuListItem} onPress={onPress}>
          <View style={s.leftContentWrapper}>
            <SvgIcon svgs={svgs} name={labelIcon} width={24} height={24} />
            <TextView
              type={'caption'}
              text={labelName}
              style={s.listItemTextStyle}
            />
          </View>
          <TextView type={'span'} text={badge} style={s.numberStyle} />
        </Touchable>
      </View>
    );
  }
}
const s = StyleSheet.create({
  itemWrapper: {
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    overflow: 'hidden',
  },
  menuListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: lessIndent,
    paddingRight: 22,
    paddingLeft: 25,
  },
  leftContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
  },
  listItemTextStyle: {
    paddingLeft: 25,
    color: colors.lightBlack,
    letterSpacing: -0.202759,
    fontFamily: 'ProductSans-Medium',
  },
  numberStyle: {
    color: colors.lightBlack,
    fontFamily: 'Roboto-Medium',
  },
});
export default DrawerLabelItem;
