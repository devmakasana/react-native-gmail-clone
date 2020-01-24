import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../../assets/svg';
import {scale, scaleVertical} from '../../utils/scale';
import {indent} from '../../styles/dimensions';
import {colors} from '../../styles';
import TextView from '../TextView/TextView';
import {Touchable, IconButton} from '../Button';
import {ScrollView} from 'react-native-gesture-handler';
export class DrawerDesign extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={s.GmailIcon}>
            <SvgIcon
              svgs={svgs}
              name={'Gmail-icon'}
              fill={'none'}
              width={scale(54)}
              height={scale(17)}
            />
          </View>
          <View>
            <Touchable style={s.MenuList}>
              <SvgIcon
                svgs={svgs}
                name={'allinboxes-icon'}
                width={25}
                height={25}
              />
              <TextView
                type={'caption'}
                text={'All inboxes'}
                style={s.Inboxe}
              />
            </Touchable>
          </View>
          <View style={s.Menu}>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'primary-icon'}
                width={24}
                height={24}
              />
              <TextView type={'caption'} text={'Primary'} style={s.InboxeOne} />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'social-icon'}
                width={24}
                height={24}
              />
              <TextView type={'caption'} text={'Social'} style={s.InboxeOne} />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'promotions-icon'}
                width={24}
                height={24}
              />
              <TextView
                type={'caption'}
                text={'Promotions'}
                style={s.InboxeOne}
              />
            </Touchable>
          </View>
          <TextView type={'span'} text={'ALL LABELS'} style={s.span} />
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'starred-icon'}
                width={24}
                height={24}
              />
              <TextView type={'caption'} text={'Starred'} style={s.InboxeOne} />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'snoozed-icon'}
                width={25}
                height={25}
              />
              <TextView type={'caption'} text={'Snoozed'} style={s.InboxeOne} />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'important-icon'}
                width={24}
                height={24}
              />
              <TextView
                type={'caption'}
                text={'Important'}
                style={s.InboxeOne}
              />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon svgs={svgs} name={'sent-icon'} width={24} height={24} />
              <TextView type={'caption'} text={'Sent'} style={s.InboxeOne} />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'scheduled-icon'}
                width={24}
                height={24}
              />
              <TextView
                type={'caption'}
                text={'Scheduled'}
                style={s.InboxeOne}
              />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'outbox-icon'}
                width={24}
                height={24}
              />
              <TextView type={'caption'} text={'Outbox'} style={s.InboxeOne} />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'drafts-icon'}
                width={24}
                height={24}
              />
              <TextView type={'caption'} text={'Drafts'} style={s.InboxeOne} />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'allmail-icon'}
                width={26}
                height={25}
              />
              <TextView
                type={'caption'}
                text={'All mail'}
                style={s.InboxeOne}
              />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon svgs={svgs} name={'spam-icon'} width={24} height={24} />
              <TextView type={'caption'} text={'Spam'} style={s.InboxeOne} />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon svgs={svgs} name={'bin-icon'} width={24} height={24} />
              <TextView type={'caption'} text={'Bin'} style={s.InboxeOne} />
            </Touchable>
          </View>
          <TextView type={'span'} text={'GOOGLE APPS'} style={s.span} />
          <View>
            <Touchable style={s.MenuListOne}>
              <SvgIcon
                svgs={svgs}
                name={'calendar-icon'}
                width={24}
                height={24}
              />
              <TextView
                type={'caption'}
                text={'Calendar'}
                style={s.InboxeOne}
              />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListTwo}>
              <SvgIcon
                svgs={svgs}
                name={'contacts-icon'}
                width={24}
                height={24}
              />
              <TextView
                type={'caption'}
                text={'Contacts'}
                style={s.InboxeOne}
              />
            </Touchable>
          </View>
          <View style={s.contacts}>
            <Touchable style={s.MenuListTwo}>
              <SvgIcon
                svgs={svgs}
                name={'settings-icon'}
                width={24}
                height={24}
              />
              <TextView
                type={'caption'}
                text={'Settings'}
                style={s.InboxeOne}
              />
            </Touchable>
          </View>
          <View>
            <Touchable style={s.MenuListTwo}>
              <SvgIcon svgs={svgs} name={'help-icon'} width={24} height={24} />
              <TextView
                type={'caption'}
                text={'Help and feedback'}
                style={s.InboxeOne}
              />
            </Touchable>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const s = StyleSheet.create({
  GmailIcon: {
    paddingTop: scaleVertical(indent + 10),
    paddingBottom: scaleVertical(indent + 6),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingLeft: scale(25),
  },
  Inboxe: {
    paddingLeft: scale(25),
    paddingVertical: scaleVertical(27),
    fontWeight: '500',
    fontFamily: 'Google Sans',
  },
  Menu: {
    marginTop: scaleVertical(8),
  },

  Inbox: {
    paddingLeft: scale(25),
    paddingVertical: scaleVertical(12),
    fontWeight: '500',
    fontFamily: 'Google Sans',
  },
  InboxeOne: {
    paddingLeft: scale(25),
    paddingVertical: scaleVertical(19),
    fontWeight: '500',
    fontFamily: 'Google Sans',
  },

  MenuListOne: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(24),
  },
  MenuListTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(24),
  },
  MenuList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(24),
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
  },
  span: {
    paddingLeft: scale(25),
    paddingTop: scale(16),
    paddingBottom: scale(6),
  },
  contacts: {
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
  },
});
export default DrawerDesign;
