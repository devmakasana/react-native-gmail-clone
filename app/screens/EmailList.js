import React, {Component} from 'react';
import {View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import AppStyles from '../styles/AppStyles';
import svgs from '../assets/svg';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import Input from '../components/Input';
import AppAvtar from '../components/Avtar/AppAvtar';
import colors from '../styles/colors';
import {indent} from '../styles/dimensions';
import {emailData} from '../assets/data/emails';
import TextView from '../components/TextView/TextView';
import MailItem from '../components/MailItem';
import AccountModal from './AccountModal';
import screens from '../constants/screens';
import {DrawerActions} from 'react-navigation-drawer';
import Modal from 'react-native-modalbox';
import NavigationOptions from '../components/NavigationOptions';
import {IconButton} from '../components/Button';

class EmailList extends Component {
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
        <View style={AppStyles.headerLeft}>
          <IconButton
            icon={'arrow-back'}
            size={32}
            iconSize={24}
            iconColor={colors.darkBlue}
            iconType={'MaterialIcons'}
            style={{marginLeft: 12}}
          />
          <TextView type={'header'} text={'3'} style={AppStyles.headerText} />
        </View>
      ),
      headerRight: () => (
        <View style={AppStyles.headerRight}>
          <IconButton
            icon={'archive'}
            size={32}
            iconSize={24}
            iconColor={colors.darkBlue}
            iconType={'MaterialIcons'}
            style={{marginRight: 18}}
          />
          <IconButton
            icon={'trash-can-outline'}
            size={32}
            iconSize={24}
            iconColor={colors.darkBlue}
            iconType={'materialcommunityicons'}
            style={{marginRight: 18}}
          />
          <IconButton
            icon={'email-outline'}
            size={32}
            iconSize={24}
            iconColor={colors.darkBlue}
            iconType={'materialcommunityicons'}
            style={{marginRight: 13}}
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
          style={AppStyles.modal}
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
        <View style={AppStyles.mlContainer}>
          <FlatList
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            data={list}
            scrollEnabled={!this.state.isSwiping}
            ListHeaderComponent={
              <View>
                <View style={AppStyles.headerSearch}>
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
                    containerStyle={AppStyles.inputWrap}></Input>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      this.setAccountModal(true);
                    }}>
                    <AppAvtar Imgsrc={''} Size={28} />
                  </TouchableOpacity>
                </View>
                <TextView
                  type={'span'}
                  style={AppStyles.tabTitle}
                  text={'Primary'}
                />
              </View>
            }
            ListFooterComponent={<View style={[{marginBottom: indent}]} />}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={AppStyles.composeIconBox}
            onPress={this.ComposeEmail}>
            <SvgIcon svgs={svgs} name={'compose-icon'} width={24} height={24} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default EmailList;
