import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale, scaleVertical} from '../utils/scale';
import colors from '../styles/colors';
import {indent, lessIndent, halfindent} from '../styles/dimensions';
import Typography from '../styles/Typography';
import fontWeights from '../styles/fontWeights';
import fontSizes from '../styles/fontSizes';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svg from '../assets/svg';

class MailList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.mailList}>
        <View style={s.mailListWrap}>
          {/* Icon */}
          <View style={[s.profileIcon]}>
            <SvgIcon
              svgs={svg}
              name={'author-icon'}
              width={42}
              height={42}
              style={s.senderIcon}
            />
            {/* <SvgIcon
              svgs={svg}
              name={'select-author'}
              width={30}
              height={30}
              style={s.selectProfile}
            /> */}
          </View>
          {/* Text */}
          <View style={s.mailText}>
            <View style={s.mailInfoBold}>
              <Text style={[s.mailSender, s.unreadText]}>BookMyShow</Text>
              <Text style={[s.mailDate, s.unreadText]}>26 Dec</Text>
            </View>

            <View style={s.mailInfo}>
              {/* Mail Info */}
              <View style={s.mailInfoWrap}>
                <Text style={[s.mailSub, s.unreadText]}>
                  Prepare for the food binge of your lif...
                </Text>
                <Text style={s.mailDesc}>
                  Book for the Ahmedabad Food Fest...
                </Text>
              </View>
              {/* Mail Star */}
              <SvgIcon
                svgs={svg}
                name={'star-icon-active'}
                width={20}
                height={20}
                style={s.starIcon}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  mailList: {
    paddingTop: scaleVertical(indent - 3),
    paddingBottom: scaleVertical(indent + 1),
    paddingLeft: scaleVertical(indent - 5),
    paddingRight: scaleVertical(indent),
    marginLeft: scaleVertical(5),
    backgroundColor: colors.transparent,
    borderRadius: 12,
  },
  mailListWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  profileIcon: {
    width: scale(42),
    height: scale(42),
    marginRight: scale(indent + 2),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: '#ff9500',
  },
  senderIcon: {},
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
  activeMailList: {
    backgroundColor: colors.lightBlue,
  },
  unreadText: {
    color: colors.primary,
    fontWeight: fontWeights.extraBold,
  },
  selectProfile: {
    position: 'absolute',
    flex: 1,
    zIndex: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeStarIcon: {
    backgroundColor: '#ff9500',
  },
  selectPrfIcon: {
    backgroundColor: colors.darkBlue,
  },
});

export default MailList;
