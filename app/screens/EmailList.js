import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Text,
} from 'react-native';
import AppStyles from '../styles/AppStyles';
import svgs from '../assets/svg';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import Input from '../components/Input';
import AppAvtar from '../components/Avtar/AppAvtar';
import {scale, scaleVertical} from '../utils/scale';
import colors from '../styles/colors';
import {indent, lessIndent, halfindent} from '../styles/dimensions';
import Typography from '../styles/Typography';
import fontWeights from '../styles/fontWeights';
import {emailData} from '../assets/data/emails';
import TextView from '../components/TextView/TextView';
import MailItem from '../components/MailItem';

class emailList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _keyExtractor = item => item.id;
  _renderItem = ({item, index}) => {
    return (
      <MailItem
        onPress={() => {
          this.onPressItem(item);
        }}
        item={item}
      />
    );
  };

  render() {
    const list = emailData;
    return (
      <SafeAreaView style={[AppStyles.root]}>
        {/* Searchbar */}
        <View style={s.shadowBox}>
          <View style={s.headerSearch}>
            <SvgIcon svgs={svgs} name={'short-menu'} width={30} height={20} />
            <Input
              value={'dddd'}
              placeholder={'Search mail'}
              containerStyle={s.inputWrap}></Input>
            <AppAvtar />
          </View>
        </View>
        {/* Email-Listing */}
        <View style={s.mlContainer}>
          <TextView style={s.tabTitle} text={'Primary'} />
          <FlatList
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            data={list}
            scrollEnabled={!this.state.isSwiping}
            ListFooterComponent={<View style={[{marginBottom: indent * 2}]} />}
          />
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
    marginTop: scale(indent + 2),
    marginBottom: scale(halfindent),
    paddingHorizontal: scale(indent),
    ...Typography.subTitle,
    color: colors.secondary,
    textTransform: 'uppercase',
    fontWeight: fontWeights.normal,
  },
});

export default emailList;
