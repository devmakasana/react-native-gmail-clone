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

class emailList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={[AppStyles.root, AppStyles.rootHorizontalPad]}>
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
});

export default emailList;
