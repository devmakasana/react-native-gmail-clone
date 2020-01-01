import React, {Component} from 'react';
import {View, StyleSheet, SwipeActionView} from 'react-native';
import {scale, scaleVertical} from '../utils/scale';
import colors from '../styles/colors';
import {indent, lessIndent, halfindent} from '../styles/dimensions';
import Typography from '../styles/Typography';
import fontWeights from '../styles/fontWeights';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svg from '../assets/svg';
import AppAvtar from './Avtar/AppAvtar';
import TextView from './TextView/TextView';
import Touchable from './Button/Touchable';

class MailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, onPress} = this.props;
    const {item} = this.props;
    return (
      <Touchable
        onPress={this._onPressButton}
        onLongPress={this._onLongPressButton}>
        <View style={[s.mailItem, item.unread && s.unreadItem]}>
          <View style={s.mailItemWrap}>
            {/* Icon */}
            <View style={[s.profileIcon, s.selectPrfIcon]}>
              <AppAvtar style={s.senderIcon} />
              <View
                style={[s.selectUserWrap, item.unread && s.activeSelectUser]}>
                <SvgIcon
                  svgs={svg}
                  name={'select-author'}
                  width={22}
                  height={22}
                  style={s.selectProfile}
                />
              </View>
            </View>
            {/* Text */}
            <View style={s.mailText}>
              <View style={s.mailInfoBold}>
                <TextView
                  style={[s.mailSender, item.unread && s.unreadText]}
                  text={item.sender.name}
                />
                <TextView
                  style={[s.mailDate, item.unread && s.unreadText]}
                  text={item.date}
                />
              </View>
              <View style={s.mailInfo}>
                {/* Mail Info */}
                <View style={s.mailInfoWrap}>
                  <TextView
                    style={[s.mailSub, item.unread && s.unreadText]}
                    text={item.subject}
                  />
                  <TextView style={s.mailDesc} text={item.description} />
                </View>
                {/* Mail Star */}
                <SvgIcon
                  svgs={svg}
                  name={'star-icon-active'}
                  width={24}
                  height={24}
                  style={s.starIcon}
                />
              </View>
            </View>
          </View>
        </View>
      </Touchable>
    );
  }
}

const s = StyleSheet.create({
  mailItem: {
    paddingTop: scaleVertical(indent - 3),
    paddingBottom: scaleVertical(indent + 1),
    paddingLeft: scaleVertical(indent - 5),
    paddingRight: scaleVertical(indent),
    marginLeft: scaleVertical(5),
    borderRadius: 12,
    marginTop: scaleVertical(4),
  },
  mailItemWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  unreadItem: {
    backgroundColor: colors.lightBlue,
  },
  profileIcon: {
    marginRight: scale(indent + 2),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: colors.transparent,
  },
  mailText: {
    flex: 1,
  },
  mailInfoBold: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mailSender: {
    ...Typography.lable,
    color: colors.secondary,
    flex: 1,
  },
  mailDate: {
    ...Typography.span,
    fontWeight: fontWeights.normal,
    color: colors.black,
    marginRight: 'auto',
  },
  mailInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  mailInfoWrap: {
    flex: 1,
  },
  mailSub: {
    marginVertical: scaleVertical(4),
    ...Typography.caption,
    color: colors.secondary,
  },
  mailDesc: {
    ...Typography.caption,
    color: colors.secondary,
    fontWeight: fontWeights.normal,
  },
  starIcon: {
    marginLeft: scaleVertical(4),
  },
  // Active Style
  activeMailItem: {
    backgroundColor: colors.lightBlue,
  },
  unreadText: {
    color: colors.primary,
    fontWeight: fontWeights.extraBold,
  },
  selectUserWrap: {
    position: 'absolute',
    top: 0,
    flex: 1,
    zIndex: 10,
    backgroundColor: colors.darkBlue,
    borderRadius: 50,
    width: scale(42),
    height: scale(42),
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
  },
  activeSelectUser: {
    opacity: 1,
  },
  activeStarIcon: {
    backgroundColor: '#ff9500',
  },
  selectPrfIcon: {
    backgroundColor: colors.darkBlue,
  },
});

export default MailItem;
