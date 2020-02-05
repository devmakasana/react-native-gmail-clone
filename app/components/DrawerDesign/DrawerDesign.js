import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../../assets/svg';
import {scale} from '../../utils/scale';
import {indent, lessIndent} from '../../styles/dimensions';
import {colors, fontWeights} from '../../styles';
import TextView from '../TextView/TextView';
import {Touchable} from '../Button';
import DrawerLabelItem from './DrawerLabelItem';
import {DrawerItems} from 'react-navigation-drawer';
import screens from '../../constants/screens';
export class DrawerDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSettingsPress = () => {
    this.props.navigation.navigate(screens.SettingsRoot);
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: indent,
          }}>
          <View>
            <View style={s.gmailIcon}>
              <SvgIcon
                svgs={svgs}
                name={'Gmail-icon'}
                fill={'none'}
                width={54}
                height={17}
              />
            </View>
            <View>
              <Touchable style={s.menuList}>
                <SvgIcon
                  svgs={svgs}
                  name={'allinboxes-icon'}
                  width={25}
                  height={25}
                />
                <TextView
                  type={'caption'}
                  text={'All inboxes'}
                  style={s.listItemTextStyle}
                />
              </Touchable>
            </View>
            <View style={s.menu}>
              <View style={[s.itemWrapper]}>
                <Touchable style={s.menuListItem}>
                  <View style={s.leftContentWrapper}>
                    <SvgIcon
                      svgs={svgs}
                      name={'primary-icon'}
                      width={24}
                      height={24}
                    />
                    <TextView
                      type={'caption'}
                      text={'Primary'}
                      style={s.listItemTextStyle}
                    />
                  </View>
                  <TextView type={'span'} text={'99+'} style={s.numberStyle} />
                </Touchable>
              </View>
              <View style={[s.itemWrapper]}>
                <Touchable style={s.menuListItem}>
                  <View style={s.leftContentWrapper}>
                    <SvgIcon
                      svgs={svgs}
                      name={'social-icon'}
                      width={24}
                      height={24}
                    />
                    <TextView
                      type={'caption'}
                      text={'Social'}
                      style={s.listItemTextStyle}
                    />
                  </View>
                  <TextView type={'span'} text={'1'} style={s.numberStyle} />
                </Touchable>
              </View>
              <View style={[s.itemWrapper]}>
                <Touchable style={s.menuListItem}>
                  <View style={s.leftContentWrapper}>
                    <SvgIcon
                      svgs={svgs}
                      name={'promotions-icon'}
                      width={24}
                      height={24}
                    />
                    <TextView
                      type={'caption'}
                      text={'Promotions'}
                      style={s.listItemTextStyle}
                    />
                  </View>

                  <TextView
                    type={'span'}
                    text={'1 new'}
                    style={s.badgeStyleWrapper}
                  />
                </Touchable>
              </View>
            </View>
            <TextView type={'span'} text={'All labels'} style={s.span} />
            <View style={s.menu}>
              <DrawerLabelItem
                labelIcon={'starred-icon'}
                labelName={'Starred'}
              />
              <DrawerLabelItem
                labelIcon={'snoozed-icon'}
                labelName={'Snoozed'}
              />
              <DrawerLabelItem
                labelIcon={'important-icon'}
                labelName={'Important'}
                badge={5}
              />
              <DrawerLabelItem labelIcon={'sent-icon'} labelName={'Sent'} />
              <DrawerLabelItem
                labelIcon={'scheduled-icon'}
                labelName={'Scheduled'}
              />
              <DrawerLabelItem labelIcon={'outbox-icon'} labelName={'Outbox'} />
              <DrawerLabelItem
                labelIcon={'drafts-icon'}
                labelName={'Drafts'}
                badge={1}
              />
              <DrawerLabelItem
                labelIcon={'allmail-icon'}
                labelName={'All mail'}
                badge={12}
              />
              <DrawerLabelItem
                labelIcon={'spam-icon'}
                labelName={'Spam'}
                badge={4}
              />
              <DrawerLabelItem
                labelIcon={'bin-icon'}
                labelName={'Bin'}
                badge={69}
              />
            </View>
            <TextView type={'span'} text={'Google Apps'} style={s.span} />
            <DrawerLabelItem
              style={s.borderRadiusNone}
              labelIcon={'calendar-icon'}
              labelName={'Calendar'}
            />
            <DrawerLabelItem
              style={s.borderRadiusNone}
              labelIcon={'contacts-icon'}
              labelName={'Contacts'}
            />

            <View style={s.bottomBorderWrapper}>
              <DrawerLabelItem
                onPress={this.onSettingsPress}
                style={s.borderRadiusNone}
                labelIcon={'settings-icon'}
                labelName={'Settings'}
              />
              <DrawerLabelItem
                style={s.borderRadiusNone}
                labelIcon={'help-icon'}
                labelName={'Help and feedback'}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const s = StyleSheet.create({
  gmailIcon: {
    paddingTop: 21,
    paddingBottom: indent,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingLeft: 25,
  },
  menu: {
    marginTop: 8,
    marginRight: 10,
  },
  listItemTextStyle: {
    paddingLeft: 25,
    color: colors.darkBlack,
    letterSpacing: -0.2,
    fontFamily: 'ProductSans-Medium',
  },
  numberStyle: {
    color: colors.lightBlack,
    fontFamily: 'Roboto-Medium',
  },
  badgeStyleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: colors.green,
    color: colors.white,
    marginRight: -10,
  },
  itemWrapper: {
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    overflow: 'hidden',
  },
  backgroundRed: {
    backgroundColor: colors.redOpacity,
  },
  backgroundBlue: {
    backgroundColor: colors.lightBlue,
  },
  backgroundGreen: {
    backgroundColor: colors.redOpacity,
  },
  menuListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: lessIndent,
    paddingRight: indent,
    paddingLeft: 25,
  },
  leftContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
  },
  MenuListTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(24),
  },
  menuList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingVertical: 21,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
  },
  span: {
    paddingLeft: 25,
    paddingTop: 16,
    paddingBottom: 6,
    color: colors.lightBlack,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: 'Roboto-Medium',
  },
  bottomBorderWrapper: {
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
    paddingTop: 5,
    marginTop: 5,
  },
  borderRadiusNone: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
export default DrawerDesign;
