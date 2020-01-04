import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import NavigationOptions from '../components/NavigationOptions';
import {colors, fontWeights, fontSizes} from '../styles';
import {lessIndent, indent, halfindent} from '../styles/dimensions';
import {scale, scaleVertical} from '../utils/scale';
import Typography from '../styles/Typography';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import TextView from '../components/TextView/TextView';
import Picker from '../components/Picker';
import Input from '../components/Input';
import {IconButton} from '../components/Button';
// import {Icon} from 'react-native-vector-icons/Icon';

export class ComposeEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.navigation.setParams({
      Send: this.SendGamil,
      attach: this.attachFile,
      More: this.MoreGmail,
    });
  }

  attachFile = () => {
    this.setState({count: this.state.count});
    alert('You tapped the button!');
  };
  SendGamil = () => {
    this.setState({count: this.state.count});
    alert('Add at least one recipient.');
  };
  MoreGmail = () => {
    this.setState({count: this.state.count});
    alert('You tapped the button!');
  };

  static navigationOptions = ({navigation}) => {
    return NavigationOptions({
      title: 'Compose',
      headerTitleStyle: {
        color: colors.primary,
        ...Typography.header,
        fontWeight: fontWeights.normal,
        fontStyle: 'normal',
      },
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 0,
      },
      headerRight: (
        <View style={s.icon}>
          <View>
            <IconButton
              style={s.headerIcon}
              onPress={navigation.getParam('attach')}
              icon={'attachment'}
              size={40}
              iconSize={24}
              iconColor={colors.secondary}
              iconType={'materialicons'}
              style={s.buttonattach}
            />
          </View>
          <View>
            <IconButton
              style={s.headerIcon}
              onPress={navigation.getParam('Send')}
              icon={'send'}
              size={40}
              iconSize={24}
              iconColor={colors.secondary}
              iconType={'materialicons'}
              style={s.buttonsend}
            />
          </View>
          <View>
            <IconButton
              style={s.headerIcon}
              onPress={navigation.getParam('More')}
              icon={'more-vert'}
              size={40}
              iconSize={24}
              iconColor={colors.secondary}
              iconType={'materialicons'}
              style={s.buttonmore}
            />
          </View>
        </View>
      ),
      headerTintColor: colors.black,
      navigation: navigation,
    });
  };
  render() {
    const FromEmail = [
      {
        value: 'nayan.gnk06@gmail.com',
        text: ' nayan.gnk06@gmail.com',
      },
      {
        value: 'devonayan@gmail.com',
        text: ' devonayan@gmail.com',
      },
      {
        value: 'gabani.nayan@gmail.com',
        text: ' gabani.nayan@gmail.com',
      },
    ];

    return (
      <View>
        <View style={s.container}>
          <TextView type={'label'} text={'From'} style={s.From} />
          <Picker
            selectedValue={'nayan.gnk06@gmail.com'}
            label={'select'}
            data={FromEmail}
            itemKeyField={'value'}
            itemValueField={'text'}
            containerStyle={s.borderBottomIos}
            selectedValue={this.state.language}
            onValueChange={lang => this.setState({language: lang})}
          />
        </View>
        <View style={s.SearchMail}>
          <TextView type={'label'} text={'To'} style={s.To} />

          <Input
            value={'input'}
            multiline
            containerStyle={s.inputWrap}
            style={s.InputValue}></Input>
          <IconButton
            style={s.headerIcon}
            onPress={this.onPress}
            icon={'keyboard-arrow-down'}
            size={40}
            iconSize={24}
            iconColor={colors.secondary}
            iconType={'materialicons'}
            style={s.dropdown}
          />
        </View>
        <View style={s.SubjectMail}>
          <Input
            value={'input'}
            placeholderTextColor={colors.darkGray}
            placeholder={'Subject'}
            multiline
            containerStyle={s.Subject}
            style={s.InputValue}></Input>
        </View>
        <View style={s.ComposeEmail}>
          <Input
            value={'input'}
            placeholderTextColor={colors.darkGray}
            placeholder={'Compose email'}
            multiline
            containerStyle={s.Subject}
            style={s.ValueInput}></Input>
        </View>
      </View>
    );
  }
}
const s = StyleSheet.create({
  // header
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonattach: {
    marginRight: scale(8),
  },

  //Compose.
  container: {
    paddingHorizontal: scale(11),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleVertical(3),
  },
  From: {
    color: colors.secondary,
    ...Typography.label,
    textAlignVertical: 'center',
  },
  To: {
    color: colors.secondary,
    ...Typography.label,
    textAlignVertical: 'center',
    marginBottom: scaleVertical(12),
  },
  dropdown: {
    marginBottom: scaleVertical(12),
  },
  SearchMail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: scale(indent - 2),
    paddingLeft: scale(indent - 4),
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
    marginBottom: scaleVertical(-12),
  },
  SubjectMail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: scale(indent - 2),
    paddingLeft: scale(indent - 8),
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
    minHeight: scale(59),
  },
  InputValue: {
    flex: 1,
    textAlignVertical: 'center',
    ...Typography.label,
    marginBottom: scaleVertical(13),
  },
  ValueInput: {
    flex: 1,
    textAlignVertical: 'center',
    ...Typography.label,
    marginBottom: scaleVertical(20),
  },
  inputWrap: {
    flex: 1,
    marginLeft: scale(indent),
    marginRight: scale(indent),
    minHeight: scale(59),
    textAlignVertical: 'center',
  },
  Subject: {
    marginRight: scale(indent),
    minHeight: scale(59),
    textAlignVertical: 'center',
  },
  ComposeEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: scale(indent - 2),
    paddingLeft: scale(indent - 8),
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
    marginTop: scaleVertical(-11),
  },
});
export default ComposeEmail;
