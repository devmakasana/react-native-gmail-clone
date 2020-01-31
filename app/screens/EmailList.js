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
import {indent, halfindent, lessIndent, WIN_HEIGHT} from '../styles/dimensions';
import Typography from '../styles/Typography';
import fontWeights from '../styles/fontWeights';
import {emailData} from '../assets/data/emails';
import TextView from '../components/TextView/TextView';
import MailItem from '../components/MailItem';
import AccountModal from './AccountModal';
import screens from '../constants/screens';
import {DrawerActions} from 'react-navigation-drawer';
import Modal from 'react-native-modalbox';
import NavigationOptions from '../components/NavigationOptions';
import {IconButton} from '../components/Button';

class emailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return NavigationOptions({
      navigation: navigation,
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerLeft: () => (
        <View style={s.headerLeft}>
          <IconButton
            icon={'arrow-back'}
            size={32}
            iconSize={24}
            iconColor={colors.darkBlue}
            iconType={'MaterialIcons'}
            style={{marginLeft: 12}}
          />
          <TextView type={'header'} text={'3'} style={s.headerText} />
        </View>
      ),
      headerRight: () => (
        <View style={s.headerRight}>
          <IconButton
            icon={'archive'}
            size={32}
            iconSize={24}
            iconColor={colors.darkBlue}
            iconType={'MaterialIcons'}
            style={{marginRight: 20}}
          />
          <IconButton
            icon={'trash-can-outline'}
            size={32}
            iconSize={24}
            iconColor={colors.darkBlue}
            iconType={'materialcommunityicons'}
            style={{marginRight: 20}}
          />
          <IconButton
            icon={'email-outline'}
            size={32}
            iconSize={24}
            iconColor={colors.darkBlue}
            iconType={'materialcommunityicons'}
            style={{marginRight: 15}}
          />
          <IconButton
            icon={'dots-vertical'}
            size={32}
            iconSize={24}
            iconColor={colors.darkBlue}
            iconType={'materialcommunityicons'}
          />
        </View>
      ),
    });
  };

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
      <MailItem
        thumbnailPath={''}
        onPressItem={() => {
          this.onPressItem();
        }}
        item={item}
      />
    );
  };

  render() {
    const list = emailData;
    return (
      <SafeAreaView style={[AppStyles.root]}>
        <Modal
          style={s.modal}
          entry={'bottom'}
          position={'center'}
          swipeToClose={true}
          isOpen={this.state.isModalVisible}
          coverScreen={true}
          onClosed={() => {
            this.setAccountModal(false);
          }}>
          <AccountModal />
        </Modal>

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
                  <TouchableOpacity activeOpacity={0.8} onPress={this.MenuList}>
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
                </View>
                <TextView style={s.tabTitle} text={'Primary'} />
              </View>
            }
            ListFooterComponent={<View style={[{marginBottom: indent}]} />}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={s.composeIconBox}
            onPress={this.ComposeEmail}>
            <SvgIcon svgs={svgs} name={'compose-icon'} width={24} height={24} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: colors.darkBlue,
    marginLeft: 30,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.transparent,
    maxHeight: WIN_HEIGHT - scale(150),
  },
  mlContainer: {
    flex: 1,
  },
  headerSearch: {
    borderRadius: 7,
    marginTop: lessIndent - 1,
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
    paddingVertical: 2,
    paddingRight: lessIndent - 1,
    paddingLeft: indent,
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
    width: 58,
    height: 58,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: indent,
    right: indent,
    shadowColor: colors.boxShadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 6,
    borderRadius: 29,
    backgroundColor: colors.white,
  },
});

export default emailList;
