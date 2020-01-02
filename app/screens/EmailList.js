import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
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
import AccountModal from './AccountModal';

class emailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }
  setAccountModal = visible => {
    this.setState({isModalVisible: visible});
  };
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
        {/* Email-Listing */}
        <View style={s.mlContainer}>
          <FlatList
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            data={list}
            scrollEnabled={!this.state.isSwiping}
            ListHeaderComponent={
              <View>
                <View style={s.headerSearch}>
                  <SvgIcon
                    svgs={svgs}
                    name={'short-menu'}
                    width={20}
                    height={13}
                  />
                  <Input
                    value={'input'}
                    placeholder={'Search mail'}
                    containerStyle={s.inputWrap}></Input>
                  <TouchableOpacity
                    style={{backgroundColor: 'transparent'}}
                    onPress={() => {
                      this.setAccountModal(true);
                    }}>
                    <AppAvtar Imgsrc={''} Size={31} />
                  </TouchableOpacity>
                  <AccountModal
                    isModalVisible={this.state.isModalVisible}
                    onRequestClose={() => {
                      this.setAccountModal(false);
                    }}
                  />
                </View>
                <TextView style={s.tabTitle} text={'Primary'} />
              </View>
            }
            ListFooterComponent={<View style={[{marginBottom: indent * 2}]} />}
          />
          <View style={s.composeIconBox}>
            <SvgIcon
              svgs={svgs}
              name={'compose-icon'}
              width={scale(24)}
              height={24}
              style={{}}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  mlContainer: {
    flex: 1,
  },
  headerSearch: {
    borderRadius: 7,
    marginTop: lessIndent,
    shadowColor: colors.boxShadowColor,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 12,
    backgroundColor: colors.white,
    marginHorizontal: scale(indent),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: scaleVertical(6),
    paddingRight: scale(14),
    paddingLeft: scale(14),
  },
  inputWrap: {
    flex: 1,
    marginLeft: scale(halfindent),
    marginRight: scale(lessIndent),
    height: scale(38),
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
  composeIconBox: {
    width: scale(58),
    height: scale(58),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(indent),
    paddingVertical: scale(indent),
    position: 'absolute',
    bottom: indent + 1,
    right: indent - 1,
    shadowColor: colors.boxShadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 10,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
});

export default emailList;
