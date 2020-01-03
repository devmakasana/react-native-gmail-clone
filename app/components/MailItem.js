import React, {Component} from 'react';
import {View, StyleSheet, SwipeActionView} from 'react-native';
import {scale, scaleVertical} from '../utils/scale';
import colors from '../styles/colors';
import {indent, lessIndent, halfindent} from '../styles/dimensions';
import Typography from '../styles/Typography';
import fontWeights from '../styles/fontWeights';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import AppAvtar from './Avtar/AppAvtar';
import TextView from './TextView/TextView';
import Touchable from './Button/Touchable';
import Swipeable from 'react-native-swipeable';
import Icon from './Icon';

class MailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {leftActionActivated: false};
  }

  handleScroll = () => {
    const {currentlyOpenSwipeable} = this.state;

    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter();
    }
  };

  render() {
    const {style, onPressItem, leftActionActivated} = this.props;
    const {item} = this.props;

    return (
      <Swipeable
        leftActionActivationDistance={100}
        rightActionActivationDistance={100}
        leftContent={
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
              backgroundColor: colors.green,
              marginTop: scaleVertical(4),
              paddingRight: indent + lessIndent,
            }}>
            <SvgIcon
              svgs={svgs}
              name={'archive-icon'}
              fill={colors.white}
              width={scale(19)}
              height={scale(19)}
            />
          </View>
        }
        rightContent={
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
              backgroundColor: colors.green,
              marginTop: scaleVertical(4),
              paddingLeft: indent + lessIndent,
            }}>
            <SvgIcon
              svgs={svgs}
              name={'archive-icon'}
              fill={colors.white}
              width={scale(19)}
              height={scale(19)}
            />
          </View>
        }
        onLeftActionActivate={() => this.setState({leftActionActivated: true})}
        onRightActionActivate={() =>
          this.setState({rightActionActivated: true})
        }
        onLeftActionDeactivate={() =>
          this.setState({leftActionActivated: false})
        }
        onRightActionDeactivate={() =>
          this.setState({rightActionActivated: false})
        }
        onLeftActionComplete={() => this.setState()}
        onRightActionComplete={() => this.setState()}>
        <Touchable
          style={[
            s.mailItemCover,
            leftActionActivated && s.activeArchiveStripe,
          ]}
          onPress={onPressItem}
          onLongPress={this._onLongPressButton}>
          <View style={[s.mailItem, item.unread && s.unreadItem]}>
            <View style={s.mailItemWrap}>
              {/* Icon */}
              <View style={[s.profileIcon, s.selectPrfIcon]}>
                <AppAvtar Size={40} style={s.senderIcon} />
                <View
                  style={[s.selectUserWrap, item.unread && s.activeSelectUser]}>
                  {/* <SvgIcon
                    svgs={svgs}
                    name={'select-author'}
                    width={22}
                    height={22}
                    style={s.selectProfile}
                  /> */}
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
                    style={[s.mailDate, item.unread && s.unreadTimeText]}
                    text={item.date}
                  />
                </View>
                <View style={s.mailInfo}>
                  {/* Mail Info */}
                  <View style={s.mailInfoWrap}>
                    <TextView
                      style={[s.mailSub, item.unread && s.unreadText]}
                      numberOfLines={1}
                      text={item.subject}
                    />
                    <TextView
                      style={s.mailDesc}
                      numberOfLines={1}
                      text={item.description}
                    />
                  </View>
                  {/* Mail Star */}
                  <Icon
                    name={'star-outline'}
                    color={colors.darkGray}
                    type={'materialcommunityicons'}
                    size={scale(20)}
                  />
                </View>
              </View>
            </View>
          </View>
        </Touchable>
      </Swipeable>
    );
  }
}

const s = StyleSheet.create({
  mailItemCover: {
    backgroundColor: colors.white,
  },
  mailItem: {
    paddingTop: scaleVertical(indent - 1),
    paddingBottom: scaleVertical(indent),
    paddingLeft: scaleVertical(lessIndent - 1),
    paddingRight: scaleVertical(lessIndent - 1),
    marginLeft: scaleVertical(5),
    borderRadius: 12,
  },
  mailItemWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  unreadItem: {
    // backgroundColor: colors.lightBlue,
  },
  profileIcon: {
    marginRight: scale(11),
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
    ...Typography.label,
    color: colors.secondary,
    flex: 1,
  },
  mailDate: {
    ...Typography.span,
    fontWeight: fontWeights.medium,
    color: colors.secondary,
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
    marginVertical: scaleVertical(2),
    ...Typography.caption,
    color: colors.secondary,
    fontFamily: 'Roboto',
  },
  mailDesc: {
    ...Typography.caption,
    color: colors.secondary,
    fontFamily: 'Roboto',
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
  unreadTimeText: {
    color: colors.black,
    fontWeight: fontWeights.extraBold,
  },
  selectUserWrap: {
    // position: 'absolute',
    // top: 0,
    // flex: 1,
    // zIndex: 10,
    // backgroundColor: colors.darkBlue,
    // borderRadius: 50,
    // width: scale(40),
    // height: scale(40),
    // alignItems: 'center',
    // justifyContent: 'center',
    // opacity: 0,
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
  activeArchiveStripe: {
    backgroundColor: colors.green,
  },
});

export default MailItem;
