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
import {indent, halfindent, lessIndent} from '../styles/dimensions';
import Typography from '../styles/Typography';
import fontWeights from '../styles/fontWeights';
import {emailData} from '../assets/data/emails';
import TextView from '../components/TextView/TextView';
import MailItem from '../components/MailItem';
import AccountModal from './AccountModal';
import screens from '../constants/screens';
import {DrawerActions} from 'react-navigation-drawer';

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
  onPressItem = () => {
    this.props.navigation.navigate(screens.EmailDetails);
  };
  ComposeEmail = () => {
    this.props.navigation.navigate('ComposeEmail');
  };
  MenuList = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };

  _keyExtractor = item => item.id;
  _renderItem = ({item, index}) => {
    return (
      <View style={{marginBottom: scaleVertical(4)}}>
        <MailItem
          onPressItem={() => {
            this.onPressItem();
          }}
          item={item}
        />
      </View>
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
                  <TouchableOpacity activeOpacity={0.7} onPress={this.MenuList}>
                    <SvgIcon
                      svgs={svgs}
                      name={'short-menu'}
                      width={20}
                      height={13}
                    />
                  </TouchableOpacity>
                  <Input
                    value={'input'}
                    placeholder={'Search mail'}
                    containerStyle={s.inputWrap}></Input>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      this.setAccountModal(true);
                    }}>
                    <AppAvtar Imgsrc={''} Size={28} />
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
            ListFooterComponent={<View style={[{marginBottom: indent}]} />}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={s.composeIconBox}
            onPress={this.ComposeEmail}>
            <SvgIcon
              svgs={svgs}
              name={'compose-icon'}
              width={scale(24)}
              height={24}
            />
          </TouchableOpacity>
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
    marginTop: scaleVertical(halfindent),
    shadowColor: colors.secondaryBoxShadow,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 4,
    backgroundColor: colors.white,
    marginHorizontal: scale(lessIndent - 1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: scaleVertical(2),
    paddingRight: scale(lessIndent - 1),
    paddingLeft: scale(indent),
  },
  inputWrap: {
    flex: 1,
    marginLeft: scale(indent),
    marginRight: scale(halfindent),
    height: scale(40),
    paddingHorizontal: scaleVertical(0),
  },
  // MailListing...
  tabTitle: {
    marginTop: scale(indent + 2),
    marginBottom: scale(5),
    paddingHorizontal: scale(indent),
    ...Typography.span,
    color: colors.secondary,
    textTransform: 'uppercase',
    fontWeight: fontWeights.medium,
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
