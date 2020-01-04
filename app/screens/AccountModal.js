import React, {Component} from 'react';
import {View, Modal, StyleSheet, ScrollView, Alert} from 'react-native';
import TextView from '../components/TextView/TextView';
import {colors, fontWeights} from '../styles';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import {scale, scaleVertical} from '../utils/scale';
import {indent, borderRadius, halfindent} from '../styles/dimensions';
import AppAvtar from '../components/Avtar/AppAvtar';
import Touchable from '../components/Button/Touchable';
import Seperator from '../components/Seperator/index';

class AccountModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {isModalVisible, onRequestClose} = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          onRequestClose();
        }}>
        <View style={s.modalWrapper}>
          <TextView style={s.closeModal} onPress={onRequestClose} />
          <View style={s.modal}>
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
                      type={'title'}
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
                  width={scale(29)}
                  height={scale(29)}
                />
              </View>
              <Touchable style={s.manageAccount}>
                <TextView
                  type={'title'}
                  text={'Manage your Google Account'}
                  style={s.manageAccountText}
                />
              </Touchable>
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
                <ModalItem avtarImg="" accountName={'nayan@pixer.io'} />
                <Touchable style={s.accountInfo}>
                  <SvgIcon
                    svgs={svgs}
                    name={'add-account'}
                    fill={'none'}
                    width={20}
                    height={14}
                    style={s.iconStyle}
                  />
                  <TextView
                    type={'title'}
                    text={'Add another account'}
                    style={s.subInfoText}
                  />
                </Touchable>
                <Touchable style={s.accountInfo}>
                  <SvgIcon
                    svgs={svgs}
                    name={'manage-account'}
                    fill={'none'}
                    width={18}
                    height={16}
                    style={s.settingIconStyle}
                  />
                  <TextView
                    type={'title'}
                    text={'Manage accounts on this device'}
                    style={s.subInfoText}
                  />
                </Touchable>
              </View>
            </ScrollView>
            <Seperator />
            <View style={s.bottomView}>
              <Touchable style={s.privacyText}>
                <TextView
                  type={'caption'}
                  text={'Privacy Policy'}
                  color={colors.secondary}
                />
              </Touchable>
              <View style={s.ellipse}></View>
              <Touchable style={s.privacyText}>
                <TextView
                  type={'caption'}
                  text={'Terms of service'}
                  color={colors.secondary}
                />
              </Touchable>
            </View>
          </View>
          <TextView style={s.closeModal} onPress={onRequestClose} />
        </View>
      </Modal>
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
        type={'title'}
        text={accountName}
        style={s.secondaryAccountName}
      />
      {!!accountID && (
        <TextView type={'span'} text={accountID} style={s.secondaryAccountID} />
      )}
    </View>
  </Touchable>
);

const s = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(32, 33, 36, 0.7)',
  },
  closeModal: {
    flex: 1,
  },
  modal: {
    marginHorizontal: scaleVertical(indent),
    marginVertical: 'auto',
    backgroundColor: colors.white,
    borderRadius: 8,
    maxHeight: scale(410),
  },
  topViewWrapper: {
    paddingHorizontal: scale(indent),
    paddingTop: scaleVertical(indent),
    paddingBottom: scaleVertical(26),
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
    paddingVertical: scaleVertical(13),
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
    paddingTop: scaleVertical(1),
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
    letterSpacing: -0.202759,
    fontWeight: fontWeights.extraBold,
  },
  accountName: {
    color: colors.lightBlack,
    fontWeight: fontWeights.medium,
    marginBottom: scaleVertical(4),
  },
  accountID: {
    color: colors.alumiGray,
  },
  manageAccount: {
    marginTop: scaleVertical(23),
    paddingHorizontal: scale(indent - 1),
    paddingTop: scaleVertical(halfindent),
    paddingBottom: scaleVertical(6),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.zirconGray,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  manageAccountText: {
    color: colors.lightBlack,
    fontWeight: fontWeights.medium,
  },
  accountContainer: {
    paddingBottom: scaleVertical(4),
  },
  secondaryAccountName: {
    color: colors.lightBlack,
    fontWeight: fontWeights.medium,
    marginBottom: scaleVertical(2),
  },
  secondaryAccountID: {
    color: colors.secondary,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(25),
    paddingVertical: scaleVertical(indent),
  },
  iconStyle: {
    marginRight: scale(15),
  },
  subInfoText: {
    color: colors.lightBlack,
    fontWeight: fontWeights.medium,
  },
  settingIconStyle: {
    marginRight: scale(17),
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleVertical(9),
  },
  privacyText: {
    paddingHorizontal: scale(indent),
    paddingVertical: scaleVertical(9),
  },
  ellipse: {
    width: scale(3),
    height: scale(3),
    backgroundColor: colors.secondary,
    borderRadius: 1.5,
  },
});
export default AccountModal;
