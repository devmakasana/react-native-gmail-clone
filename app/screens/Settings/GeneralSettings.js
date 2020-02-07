import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import AppStyles from '../../styles/AppStyles';
import {colors} from '../../styles';
import NavigationOptions from '../../components/NavigationOptions';
import {IconButton, Touchable} from '../../components/Button';
import TextView from '../../components/TextView/TextView';
import {lessIndent, indent} from '../../styles/dimensions';
import CheckBoxItem from './CheckBoxItem';

class GeneralSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversationChecked: true,
      autofitMessChecked: true,
      webLinkInGmailChecked: true,
      deleteChecked: false,
      archiveChecked: false,
      sendingChecked: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return NavigationOptions({
      navigation: navigation,
      headerStyle: AppStyles.headerStyle,
      headerTitleStyle: AppStyles.headerTitleStyle,
      headerTintColor: colors.secondary,
      title: 'General Settings',
      headerRight: () => (
        <View style={AppStyles.headerRight}>
          <IconButton
            icon={'dots-vertical'}
            size={32}
            iconSize={24}
            iconColor={colors.secondary}
            iconType={'materialcommunityicons'}
          />
        </View>
      ),
    });
  };

  onConversationViewChange = () => {
    this.setState({conversationChecked: !this.state.conversationChecked});
  };
  onAutofitMessChange = () => {
    this.setState({autofitMessChecked: !this.state.autofitMessChecked});
  };
  onWebLinkChange = () => {
    this.setState({webLinkInGmailChecked: !this.state.webLinkInGmailChecked});
  };
  onDeletePress = () => {
    this.setState({deleteChecked: !this.state.deleteChecked});
  };
  onArchivePress = () => {
    this.setState({archiveChecked: !this.state.archiveChecked});
  };
  onSendPress = () => {
    this.setState({sendingChecked: !this.state.sendingChecked});
  };
  render() {
    return (
      <SafeAreaView style={AppStyles.root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {this.renderSettingsItem(
              'Default notification action',
              'Archive',
              true,
              false,
              false,
              this.onDefaultNotificationPress,
            )}
            {this.renderSettingsItem('Manage notifications', '', true)}
            {this.renderSettingsItem(
              'Conversation View',
              'Group emails in the same conversation for IMAP, POP3 and Exchange accounts',
              true,
              true,
              this.state.conversationChecked,
              this.onConversationViewChange,
            )}
            {this.renderSettingsItem(
              'Conversation list density',
              'Default',
              true,
              false,
              false,
              this.onConversationListPress,
            )}
            {this.renderSettingsItem(
              'Swipe actions',
              'Configure swipe actions to quickly act on emails in the conversation list',
              true,
              false,
              false,
              this.onSwipeActionPress,
            )}
            {this.renderSettingsItem(
              'Default reply action',
              'Choose your default reply action',
              true,
              false,
              false,
              this.onDefaultReplyPress,
            )}
            {this.renderSettingsItem(
              'Auto-fit messages',
              'Shrink messages to fit the screen',
              true,
              true,
              this.state.autofitMessChecked,
              this.onAutofitMessChange,
            )}
            {this.renderSettingsItem(
              'Auto-advance',
              'Show conversation list after you archive or delete',
              true,
              false,
              false,
              this.onAutoAdvancePress,
            )}
            {this.renderSettingsItem(
              'Open web links in Gmail',
              'Turn on for faster browsing',
              false,
              true,
              this.state.webLinkInGmailChecked,
              this.onWebLinkChange,
            )}
            <TextView
              type={'caption'}
              text={'Action Confirmations'}
              style={s.subText}
            />
            {this.renderActionItem(
              'Confirm before deleting',
              true,
              this.state.deleteChecked,
              this.onDeletePress,
            )}
            {this.renderActionItem(
              'Confirm before archiving',
              true,
              this.state.archiveChecked,
              this.onArchivePress,
            )}
            {this.renderActionItem(
              'Confirm before sending',
              false,
              this.state.sendingChecked,
              this.onSendPress,
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  renderSettingsItem = (
    itemTitle,
    itemText,
    isBorder,
    isCheckBoxDisplayed,
    isSelected,
    onPress,
  ) => {
    return (
      <Touchable
        style={[s.itemWrapper, isBorder ? s.bottomBorder : null]}
        onPress={onPress}>
        <View style={s.leftContent}>
          <TextView type={'label'} text={itemTitle} style={s.itemTitleStyle} />
          {!!itemText && (
            <TextView
              type={'caption'}
              text={itemText}
              style={s.itemTextStyle}
            />
          )}
        </View>
        {isCheckBoxDisplayed && (
          <CheckBoxItem isSelected={isSelected} onPress={onPress} />
        )}
      </Touchable>
    );
  };
  renderActionItem = (itemTitle, isBorder, isSelected, onPress) => {
    return (
      <Touchable
        style={[s.actionItemWrapper, isBorder ? s.bottomBorder : null]}
        onPress={onPress}>
        <View style={s.leftContent}>
          <TextView type={'label'} text={itemTitle} style={s.itemTitleStyle} />
        </View>
        <CheckBoxItem isSelected={isSelected} onPress={onPress} />
      </Touchable>
    );
  };
}
const s = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: indent,
    paddingLeft: lessIndent - 1,
    paddingRight: 22,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryBorderColor,
  },
  leftContent: {
    flex: 0.95,
  },
  itemTitleStyle: {
    letterSpacing: 0.15,
    color: colors.secondary,
  },
  itemTextStyle: {
    color: colors.secondary,
    marginTop: 4,
    letterSpacing: 0.25,
    fontFamily: 'Roboto-Regular',
  },
  subText: {
    letterSpacing: 0.1,
    color: colors.darkBlue,
    marginTop: 17,
    marginLeft: lessIndent - 1,
    fontFamily: 'Roboto-Medium',
  },
  actionItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingLeft: lessIndent - 1,
    paddingRight: 22,
  },
});
export default GeneralSettings;
