import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import colors from '../styles/colors';
import {scaleVertical} from '../utils/scale';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import {scale} from '../utils/scale';
import Typography from '../styles/Typography';
import {indent} from '../styles/dimensions';

export class AccountModal extends Component {
  AlertWithDelay = () => {
    this.props.navigation.navigate('');
  };
  render() {
    return (
      <View style={s.container}>
        <View style={s.Modal}>
          <View>
            <Image
              source={require('../assets/images/profileBg.png')}
              style={s.profileing}
            />
            <SvgIcon
              style={s.exportImgWrapper}
              svgs={svgs}
              name={'BB-icon'}
              fill={'none'}
              width={24}
              height={18}
            />
          </View>
          <View style={s.Gmailname}>
            <Text style={s.mailText}>Nayan Gnk</Text>
          </View>
          <View style={s.Gmail}>
            <Text style={s.mailId}>nayan.gnk06@gmail.com</Text>
          </View>
          <View>
            <SvgIcon
              style={s.Google}
              svgs={svgs}
              name={'Google-icon'}
              fill={'none'}
              width={29}
              height={29}
            />
          </View>
          <View style={s.Manage}>
            <TouchableOpacity onPress={this.AlertWithDelay}>
              <Text style={s.ManageText}>Manage your Google Account</Text>
            </TouchableOpacity>
          </View>
          {/*  */}
          <View style={s.border}></View>
          {/*  */}
          <View>
            <Image
              source={require('../assets/images/profileBg.png')}
              style={s.profileingBg}
            />
            <SvgIcon
              style={s.exportImgWrappers}
              svgs={svgs}
              name={'8-icon'}
              fill={'none'}
              width={24}
              height={18}
            />
          </View>
          {/*  */}
          <View style={s.Gmailnames}>
            <Text style={s.MailText}>Nayan Devo</Text>
          </View>
          <View style={s.GmailCom}>
            <Text style={s.MailId}>ndevonayan@gmail.com</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/profileBg.png')}
              style={s.profileingBg1}
            />
            <SvgIcon
              style={s.exportImgWrappers1}
              svgs={svgs}
              name={'18-icon'}
              fill={'none'}
              width={24}
              height={18}
            />
          </View>
          <View style={s.Gmailnames1}>
            <Text style={s.MailText1}>Gabani Nayan</Text>
          </View>
          <View style={s.GmailCom1}>
            <Text style={s.MailId1}>gabani.nayan@gmail.com</Text>
          </View>
          {/*  */}
          <View style={s.Gmailnames}>
            <Text style={s.MailText}>Nayan Devo</Text>
          </View>
          <View style={s.GmailCom}>
            <Text style={s.MailId}>ndevonayan@gmail.com</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/profileBg.png')}
              style={s.profileingBg2}
            />
          </View>
          <View style={s.Gmailnames2}>
            <Text style={s.MailText2}>nayan@pixer.io</Text>
          </View>
          {/*  */}
          <View>
            <SvgIcon
              style={s.anotheracc}
              svgs={svgs}
              name={'anotheracc-icon'}
              fill={'none'}
              width={20}
              height={14}
            />
          </View>
          <View style={s.Add}>
            <Text style={s.another}>Add another account</Text>
          </View>
          {/*  */}
          <View>
            <SvgIcon
              style={s.anotheracc}
              svgs={svgs}
              name={'setting-icon'}
              fill={'none'}
              width={18}
              height={16}
            />
          </View>
          <View style={s.Add}>
            <Text style={s.another}>Manage accounts on this device</Text>
          </View>
          {/*  */}
          <View style={s.border1}></View>
          {/*  */}
          <View style={s.Privacy}>
            <Text style={s.Policy}>Privacy Policy</Text>
          </View>
          {/*  */}
          <View>
            <Image
              source={require('../assets/images/Ellipse.png')}
              style={s.Ellipse}
            />
          </View>
          {/*  */}
          <View style={s.Terms}>
            <Text style={s.service}>Terms of service</Text>
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.silverGray,
    position: 'relative',
  },
  Modal: {
    height: 553,
    backgroundColor: colors.white,
    marginHorizontal: scaleVertical(16),
    marginVertical: scaleVertical(88),
    borderRadius: 8,
  },
  exportImgWrapper: {
    position: 'absolute',
    marginTop: scale(44),
    marginLeft: scale(38),
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 25,
  },
  profileing: {
    marginLeft: scale(indent),
    marginVertical: scale(indent),
    width: scale(38),
    height: scale(38),
  },
  Gmailname: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: scale(62),
    marginTop: scale(indent),
  },
  mailText: {
    ...Typography.title,
    color: colors.lightBlack,
    fontWeight: '500',
  },
  Gmail: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: scale(62),
    marginTop: scale(39),
  },
  mailId: {
    ...Typography.span,
    color: colors.alumiGray,
    fontWeight: 'normal',
  },
  Google: {
    flexDirection: 'column',
    position: 'absolute',
    right: scale(16),
    bottom: scale(25),
  },
  Manage: {
    position: 'absolute',
    width: 234,
    height: 33,
    borderWidth: 1,
    top: scale(79),
    marginHorizontal: scale(58),
    borderColor: '#E8EAED',
    borderRadius: 15,
  },
  ManageText: {
    ...Typography.title,
    color: colors.lightBlack,
    textAlign: 'center',
    marginVertical: scale(6),
  },
  border: {
    position: 'absolute',
    width: 379.5,
    borderColor: colors.zirconGray,
    borderBottomWidth: 1,
    marginTop: scale(138),
  },
  //
  Gmailnames: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: scale(62),
    marginTop: scale(152),
  },
  MailText: {
    ...Typography.title,
    color: colors.lightBlack,
    fontWeight: '500',
  },
  GmailCom: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: scale(62),
    marginTop: scale(173),
  },
  MailId: {
    ...Typography.span,
    color: colors.alumiGray,
    fontWeight: 'normal',
  },

  exportImgWrappers: {
    position: 'absolute',
    marginTop: scale(100),
    marginLeft: scale(35),
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 25,
  },
  profileingBg: {
    marginLeft: scale(indent),
    marginTop: scale(80),
    width: scale(31),
    height: scale(31),
  },
  //
  profileingBg1: {
    marginLeft: scale(indent),
    width: scale(31),
    height: scale(31),
    marginTop: scale(32),
  },
  exportImgWrappers1: {
    position: 'absolute',
    marginTop: scale(50),
    marginLeft: scale(37),
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 25,
  },
  Gmailnames1: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: scale(62),
    marginTop: scale(214),
  },
  MailText1: {
    ...Typography.title,
    color: colors.lightBlack,
    fontWeight: '500',
  },
  GmailCom1: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: scale(62),
    marginTop: scale(234),
  },
  MailId1: {
    ...Typography.span,
    color: colors.alumiGray,
    fontWeight: 'normal',
  },
  //
  Gmailnames2: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: scale(62),
    marginTop: scale(280),
  },
  MailText2: {
    ...Typography.title,
    color: colors.lightBlack,
    fontWeight: '500',
  },
  profileingBg2: {
    marginLeft: scale(indent),
    width: scale(31),
    height: scale(31),
    marginTop: scale(31),
  },
  //
  anotheracc: {
    marginTop: scale(34),
    marginLeft: scale(25),
  },
  Add: {
    flexDirection: 'column',
    marginLeft: scale(62),
    marginTop: scale(-14),
  },
  another: {
    ...Typography.title,
    color: colors.lightBlack,
    fontWeight: '500',
  },
  //
  border1: {
    position: 'absolute',
    width: 379.5,
    borderColor: colors.zirconGray,
    borderBottomWidth: 1,
    marginTop: scale(431),
  },
  //
  Privacy: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: scale(68),
    alignItems: 'flex-start',
    marginTop: scale(445),
  },
  Policy: {
    ...Typography.subTitle,
    color: colors.secondary,
    fontWeight: '500',
  },
  Ellipse: {
    marginLeft: scale(162),
    marginTop: scale(46),
    width: scale(3),
    height: scale(3),
  },
  //
  Terms: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: scale(181),
    alignItems: 'flex-start',
    marginTop: scale(445),
  },
  service: {
    ...Typography.subTitle,
    color: colors.secondary,
    fontWeight: '500',
  },
});
export default AccountModal;
