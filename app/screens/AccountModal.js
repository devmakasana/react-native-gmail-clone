import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import TextView from '../components/TextView/TextView';
import {colors} from '../styles';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import {scale} from '../utils/scale';
import {indent, halfindent, WIN_HEIGHT} from '../styles/dimensions';
import AppAvtar from '../components/Avtar/AppAvtar';
import Touchable from '../components/Button/Touchable';
import Seperator from '../components/Seperator/index';

class AccountModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.modalWrapper}>
        <View style={s.topViewWrapper}>
          <View style={s.mainAccountWrapper}>
            <View style={s.leftContent}>
              <View style={s.position}>
                <AppAvtar Imgsrc={''} Size={38} />
                <View style={s.badgeStyle}>
                  <TextView
                    type={'small'}
                    text={'11'}
                    style={s.badgeTextStyle}
                  />
                </View>
              </View>
              <View>
                <TextView
                  type={'caption'}
                  text={'Nayan Gnk'}
                  style={s.accountName}
                />
                <TextView
                  type={'span'}
                  text={'nayan.gnk06@gmail.com'}
                  style={s.accountID}
                />
              </View>
            </View>
            <SvgIcon
              svgs={svgs}
              name={'google-icon'}
              fill={'none'}
              width={30}
              height={30}
            />
          </View>
          <View style={s.tochableWrapper}>
            <Touchable style={s.manageAccount}>
              <TextView
                type={'caption'}
                text={'Manage your Google Account'}
                style={s.manageAccountText}
              />
            </Touchable>
          </View>
        </View>
        <Seperator />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.accountContainer}>
            <ModalItem
              avtarImg=""
              badge={8}
              accountName={'Nayan Devo'}
              accountID={'devonayan@gmail.com'}
            />
            <ModalItem
              avtarImg=""
              badge={18}
              accountName={'Gabani Nayan'}
              accountID={'gabani.nayan@gmail.com'}
            />
            <ModalItem
              avtarImg=""
              badge={18}
              accountName={'Gabani Nayan'}
              accountID={'gabani.nayan@gmail.com'}
            />
            <ModalItem
              avtarImg=""
              badge={18}
              accountName={'Gabani Nayan'}
              accountID={'gabani.nayan@gmail.com'}
            />
            <ModalItem
              avtarImg=""
              badge={18}
              accountName={'Gabani Nayan'}
              accountID={'gabani.nayan@gmail.com'}
            />
            <ModalItem avtarImg="" accountName={'nayan@pixer.io'} />
            <RenderAccountItem
              iconName={'add-account'}
              text={'Add another account'}
            />
            <RenderAccountItem
              iconName={'manage-account'}
              text={'Manage accounts on this device'}
            />
          </View>
        </ScrollView>
        <Seperator />
        <View style={s.bottomView}>
          <Touchable style={s.privacyText}>
            <TextView
              type={'subTitle'}
              text={'Privacy Policy'}
              color={colors.secondary}
            />
          </Touchable>
          <View style={s.ellipse}></View>
          <Touchable style={s.privacyText}>
            <TextView
              type={'subTitle'}
              text={'Terms of service'}
              color={colors.secondary}
            />
          </Touchable>
        </View>
      </View>
    );
  }
}

const ModalItem = ({avtarImg, badge, accountName, accountID}) => (
  <Touchable style={[s.leftContent, s.itemStyle]}>
    <View style={s.positionStyle}>
      <AppAvtar Imgsrc={avtarImg} Size={31} />
      {!!badge && (
        <View style={s.badgeStyle}>
          <TextView type={'small'} text={badge} style={s.badgeTextStyle} />
        </View>
      )}
    </View>
    <View>
      <TextView
        type={'caption'}
        text={accountName}
        style={s.secondaryAccountName}
      />
      {!!accountID && (
        <TextView type={'span'} text={accountID} style={s.accountID} />
      )}
    </View>
  </Touchable>
);

const RenderAccountItem = ({iconName, text}) => (
  <Touchable style={s.accountInfo}>
    <SvgIcon
      svgs={svgs}
      name={iconName}
      fill={'none'}
      width={19}
      height={14}
      style={s.iconStyle}
    />
    <TextView type={'title'} text={text} style={s.subInfoText} />
  </Touchable>
);

const s = StyleSheet.create({
  modalWrapper: {
    backgroundColor: colors.white,
    maxHeight: WIN_HEIGHT - scale(150),
    marginHorizontal: 12,
    borderRadius: 8,
  },
  topViewWrapper: {
    paddingHorizontal: scale(indent),
    paddingTop: indent,
    paddingBottom: 26,
  },
  mainAccountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemStyle: {
    paddingHorizontal: scale(20),
    paddingVertical: 13,
  },
  position: {
    position: 'relative',
    marginRight: scale(halfindent),
  },
  positionStyle: {
    position: 'relative',
    marginRight: scale(11),
  },
  badgeStyle: {
    backgroundColor: colors.white,
    borderRadius: 18,
    paddingTop: 1,
    paddingHorizontal: scale(3),
    shadowColor: colors.boxShadowColor,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 3,
    position: 'absolute',
    right: -3,
    bottom: -4,
  },
  badgeTextStyle: {
    color: colors.secondary,
    letterSpacing: -0.2,
    fontFamily: 'Roboto-Bold',
  },
  accountName: {
    color: colors.darkBlack,
    fontFamily: 'ProductSans-Medium',
    marginBottom: 2,
  },
  accountID: {
    color: colors.secondary,
    letterSpacing: 0.4,
  },
  tochableWrapper: {
    marginTop: 23,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.zirconGray,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
  },
  manageAccount: {
    paddingHorizontal: scale(indent - 1),
    paddingTop: halfindent,
    paddingBottom: 8,
  },
  manageAccountText: {
    color: colors.darkBlack,
    fontFamily: 'ProductSans-Medium',
  },
  accountContainer: {
    paddingBottom: 4,
  },
  secondaryAccountName: {
    color: colors.darkBlack,
    letterSpacing: -0.2,
    fontFamily: 'ProductSans-Medium',
    marginBottom: 2,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(25),
    paddingVertical: indent,
  },
  iconStyle: {
    marginRight: scale(15),
  },
  subInfoText: {
    color: colors.darkBlack,
    letterSpacing: 0.15,
    fontFamily: 'ProductSans-Medium',
  },
  settingIconStyle: {
    marginRight: scale(17),
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
  },
  privacyText: {
    paddingHorizontal: scale(indent),
    paddingVertical: 9,
  },
  ellipse: {
    width: scale(3),
    height: scale(3),
    backgroundColor: colors.secondary,
    borderRadius: 1.5,
  },
});
export default AccountModal;
