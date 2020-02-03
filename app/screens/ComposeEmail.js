import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import NavigationOptions from '../components/NavigationOptions';
import {colors} from '../styles';
import {lessIndent, halfindent} from '../styles/dimensions';
import {scale, scaleVertical} from '../utils/scale';
import Typography from '../styles/Typography';
import TextView from '../components/TextView/TextView';
import Picker from '../components/Picker';
import Input from '../components/Input';
import {IconButton} from '../components/Button';
import AppStyles from '../styles/AppStyles';
import {TextInput} from 'react-native-gesture-handler';

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
      headerStyle: AppStyles.headerStyle,
      headerTitleStyle: AppStyles.headerTitleStyle,
      headerTintColor: colors.secondary,
      navigation: navigation,
      headerRight: (
        <View style={AppStyles.headerRight}>
          <View>
            <IconButton
              onPress={navigation.getParam('attach')}
              icon={'attachment'}
              size={32}
              iconSize={24}
              iconColor={colors.secondary}
              iconType={'materialicons'}
              style={{marginRight: 18}}
            />
          </View>
          <View>
            <IconButton
              onPress={navigation.getParam('Send')}
              icon={'send'}
              size={32}
              iconSize={20}
              iconColor={colors.secondary}
              iconType={'materialicons'}
              style={{marginRight: halfindent}}
            />
          </View>
          <View>
            <IconButton
              onPress={navigation.getParam('More')}
              icon={'more-vert'}
              size={32}
              iconSize={24}
              iconColor={colors.secondary}
              iconType={'materialicons'}
            />
          </View>
        </View>
      ),
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
      <SafeAreaView style={AppStyles.root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={s.container}>
              <TextView type={'label'} text={'From'} style={s.from} />
              <Picker
                selectedValue={'nayan.gnk06@gmail.com'}
                label={'Select'}
                data={FromEmail}
                itemKeyField={'value'}
                itemValueField={'text'}
                containerStyle={s.borderBottomIos}
                selectedValue={this.state.language}
                onValueChange={lang => this.setState({language: lang})}
              />
            </View>
            <View style={s.SearchMail}>
              <TextView type={'label'} text={'To'} style={s.subText} />
              <Input
                value={'input'}
                multiline={true}
                containerStyle={s.inputWrap}
                style={s.inputValue}
              />
              <IconButton
                style={{marginTop: halfindent}}
                onPress={this.onPress}
                icon={'keyboard-arrow-down'}
                size={38}
                iconSize={24}
                iconColor={colors.secondary}
                iconType={'materialicons'}
              />
            </View>
            <View style={s.inputWrapper}>
              <Input
                value={'input'}
                placeholderTextColor={colors.darkGray}
                placeholder={'Subject'}
                multiline={true}
                containerStyle={s.inputWrapStyle}
                style={s.inputValue}
              />
            </View>
            <View style={[s.inputWrapper]}>
              <Input
                value={'input'}
                placeholderTextColor={colors.darkGray}
                placeholder={'Compose email'}
                multiline={true}
                containerStyle={s.inputWrapStyle}
                style={s.inputValue}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const s = StyleSheet.create({
  container: {
    paddingLeft: scale(lessIndent - 1),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  from: {
    color: colors.secondary,
    letterSpacing: 0.15,
  },
  subText: {
    color: colors.secondary,
    letterSpacing: 0.15,
    marginTop: 18,
  },
  dropdown: {
    marginBottom: scaleVertical(12),
  },
  SearchMail: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: scale(lessIndent - 1),
    paddingRight: scale(4),
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  inputWrapStyle: {
    flex: 1,
  },
  inputValue: {
    ...Typography.label,
    paddingHorizontal: scale(lessIndent),
    letterSpacing: 0.4,
  },
  valueInput: {
    flex: 1,
    textAlignVertical: 'center',
    ...Typography.label,
  },
  inputWrap: {
    flex: 1,
    paddingVertical: 2,
    marginLeft: scale(22),
  },
  composeEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(lessIndent - 1),
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
});
export default ComposeEmail;
