import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import NavigationOptions from '../components/NavigationOptions';
import {colors} from '../styles';
import {lessIndent, halfindent, indent, WIN_HEIGHT} from '../styles/dimensions';
import {scale} from '../utils/scale';
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
          <View style={s.container}>
            <View style={s.contentWrapper}>
              <TextView type={'label'} text={'From'} style={s.labelText} />
              <Picker
                selectedValue={'nayan.gnk06@gmail.com'}
                label={'Select'}
                data={FromEmail}
                itemKeyField={'value'}
                itemValueField={'text'}
                selectedValue={this.state.language}
                onValueChange={lang => this.setState({language: lang})}
              />
            </View>
            <View style={s.selectInputWrapper}>
              <TextView type={'label'} text={'To'} style={s.toLabelStyle} />
              <TextInput
                style={s.selectedInput}
                type="text"
                name={'select input'}
                multiline={true}
                autoCompleteType="off"
                // value={this.state.SearchText}
                // onChangeText={text => this.Search(text)}
                returnKeyType="next"
              />
              <IconButton
                style={{marginTop: 6}}
                onPress={this.onPress}
                icon={'keyboard-arrow-down'}
                size={34}
                iconSize={24}
                iconColor={colors.secondary}
                iconType={'materialicons'}
              />
            </View>
            <View style={s.composeWrapper}>
              <TextInput
                style={s.inputWrapper}
                type="text"
                name={'Subject'}
                multiline={true}
                autoCompleteType="off"
                placeholder="Subject"
                placeholderTextColor={colors.darkGray}
                // value={this.state.SearchText}
                // onChangeText={text => this.Search(text)}
                returnKeyType="next"
              />
            </View>
            <View style={[s.composeWrapper]}>
              <TextInput
                style={[
                  s.inputWrapper,
                  {
                    // minHeight: scale(400),
                    alignItems: 'flex-start',
                    // textAlignVertical: 'top',
                  },
                ]}
                type="text"
                name={'Compose email'}
                multiline={true}
                autoCompleteType="off"
                placeholder="Compose email"
                placeholderTextColor={colors.darkGray}
                // value={this.state.SearchText}
                // onChangeText={text => this.Search(text)}
                returnKeyType="done"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      // <SafeAreaView style={AppStyles.root}>
      //   <ScrollView showsVerticalScrollIndicator={false}>
      //     <View>
      //       <View style={s.container}>
      //         <TextView type={'label'} text={'From'} style={s.from} />
      //         <Picker
      //           selectedValue={'nayan.gnk06@gmail.com'}
      //           label={'Select'}
      //           data={FromEmail}
      //           itemKeyField={'value'}
      //           itemValueField={'text'}
      //           selectedValue={this.state.language}
      //           onValueChange={lang => this.setState({language: lang})}
      //         />
      //       </View>
      //       <View style={s.SearchMail}>
      //         <TextView type={'label'} text={'To'} style={s.subText} />
      //         <Input
      //           value={'input'}
      //           multiline={true}
      //           containerStyle={s.inputWrap}
      //           style={s.inputValue}
      //         />
      //         <IconButton
      //           style={{marginTop: halfindent}}
      //           onPress={this.onPress}
      //           icon={'keyboard-arrow-down'}
      //           size={38}
      //           iconSize={24}
      //           iconColor={colors.secondary}
      //           iconType={'materialicons'}
      //         />
      //       </View>
      //       <View style={s.inputWrapper}>
      //         <Input
      //           value={'input'}
      //           placeholderTextColor={colors.darkGray}
      //           placeholder={'Subject'}
      //           multiline={true}
      //           containerStyle={s.inputWrapStyle}
      //           style={s.inputValue}
      //         />
      //       </View>
      //       <View style={[s.inputWrapper]}>
      //         <Input
      //           value={'input'}
      //           placeholderTextColor={colors.darkGray}
      //           placeholder={'Compose email'}
      //           multiline={true}
      //           containerStyle={s.inputWrapStyle}
      //           style={s.inputValue}
      //         />
      //       </View>
      //     </View>
      //   </ScrollView>
      // </SafeAreaView>
    );
  }
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: lessIndent,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(lessIndent - 1),
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryBorderColor,
  },
  labelText: {
    color: colors.secondary,
    letterSpacing: 0.15,
  },
  toLabelStyle: {
    color: colors.secondary,
    letterSpacing: 0.15,
    marginTop: 15,
  },
  selectInputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 3,
    paddingLeft: scale(lessIndent - 1),
    paddingRight: scale(3),
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryBorderColor,
  },
  selectedInput: {
    flex: 1,
    paddingLeft: 36,
    color: colors.black,
    ...Typography.label,
  },
  inputWrapper: {
    minHeight: scale(50),
    color: colors.black,
    ...Typography.label,
  },
  composeWrapper: {
    paddingLeft: scale(lessIndent - 1),
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryBorderColor,
  },

  // container: {
  //   paddingLeft: scale(lessIndent - 1),
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginTop: 5,
  // },
  from: {
    color: colors.secondary,
    letterSpacing: 0.15,
  },
  subText: {
    color: colors.secondary,
    letterSpacing: 0.15,
    marginTop: 18,
  },
  SearchMail: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: scale(lessIndent - 1),
    paddingRight: scale(4),
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  // inputWrapper: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingVertical: 2,
  //   borderTopWidth: 1,
  //   borderTopColor: colors.borderColor,
  // },
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
