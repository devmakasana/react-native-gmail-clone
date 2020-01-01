import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import AppStyles from '../styles/AppStyles';
import svgs from '../assets/svg';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import Input from '../components/Input';
import AppAvtar from '../components/AppAvtar';
import {scale, scaleVertical} from '../utils/scale';
import colors from '../styles/colors';
import {indent, lessIndent, halfindent} from '../styles/dimensions';
import Typography from '../styles/Typography';
import fontWeights from '../styles/fontWeights';
import fontSizes from '../styles/fontSizes';
import MailList from '../components/MailList';
import {ScrollView} from 'react-native-gesture-handler';

class emailList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={[AppStyles.root]}>
        {/* Searchbar */}
        <ScrollView>
          <View style={s.shadowBox}>
            <View style={s.headerSearch}>
              <SvgIcon svgs={svgs} name={'short-menu'} width={30} height={20} />
              <Input
                value={'dddd'}
                placeholder={'Search mail'}
                containerStyle={s.inputWrap}></Input>
              <AppAvtar></AppAvtar>
            </View>
          </View>
          {/* Email-Listing */}
          <View style={s.mlContainer}>
            <Text style={s.tabTitle}>Primary</Text>
            <MailList></MailList>
            <MailList></MailList>
            <MailList></MailList>
            <MailList></MailList>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  shadowBox: {
    borderRadius: 7,
    marginTop: lessIndent,
    shadowColor: colors.boxShadowColor,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 12,
    backgroundColor: colors.white,
    marginHorizontal: scale(indent),
  },
  headerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: scaleVertical(11),
    paddingRight: scale(14),
    paddingLeft: scale(19),
  },
  inputWrap: {
    flex: 1,
    marginLeft: scale(lessIndent),
    marginRight: scale(lessIndent),
    paddingHorizontal: scaleVertical(0),
  },
  // MailListing...
  tabTitle: {
    paddingTop: scale(indent + 2),
    paddingBottom: scale(indent + 3),
    paddingHorizontal: scale(indent),
    ...Typography.subTitle,
    color: colors.secondary,
    textTransform: 'uppercase',
    fontWeight: fontWeights.normal,
  },
});

export default emailList;
