import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import AppStyles from '../../styles/AppStyles';
import {colors} from '../../styles';
import NavigationOptions from '../../components/NavigationOptions';
import {IconButton, Touchable} from '../../components/Button';
import TextView from '../../components/TextView/TextView';
import {lessIndent, indent} from '../../styles/dimensions';
import CheckBox from '@react-native-community/checkbox';

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

  onConversationViewChange = conversationChecked => {
    this.setState({conversationChecked: conversationChecked});
  };
  onAutoFitMessageChange = autofitMessChecked => {
    this.setState({autofitMessChecked: autofitMessChecked});
  };
  onWebLinkInGmailChange = webLinkInGmailChecked => {
    this.setState({webLinkInGmailChecked: webLinkInGmailChecked});
  };
  onDeleteChange = deleteChecked => {
    this.setState({deleteChecked: deleteChecked});
  };
  onArchiveChange = archiveChecked => {
    this.setState({archiveChecked: archiveChecked});
  };
  onSendingChange = onSendingChange => {
    this.setState({onSendingChange: onSendingChange});
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
            )}
            {this.renderSettingsItem(
              'Swipe actions',
              'Configure swipe actions to quickly act on emails in the conversation list',
              true,
            )}
            {this.renderSettingsItem(
              'Default reply action',
              'Choose your default reply action',
              true,
            )}
            {this.renderSettingsItem(
              'Auto-fit messages',
              'Shrink messages to fit the screen',
              true,
              true,
              this.state.autofitMessChecked,
              this.onAutoFitMessageChange,
            )}
            {this.renderSettingsItem(
              'Auto-advance',
              'Show conversation list after you archive or delete',
              true,
            )}
            {this.renderSettingsItem(
              'Open web links in Gmail',
              'Turn on for faster browsing',
              false,
              true,
              this.state.webLinkInGmailChecked,
              this.onWebLinkInGmailChange,
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
              this.onDeleteChange,
            )}
            {this.renderActionItem(
              'Confirm before archiving',
              true,
              this.state.archiveChecked,
              this.onArchiveChange,
            )}
            {this.renderActionItem(
              'Confirm before sending',
              false,
              this.state.sendingChecked,
              this.onSendingChange,
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
    isCheckBoxDisplayed = false,
    value,
    onValueChange,
  ) => {
    return (
      <Touchable style={[s.itemWrapper, isBorder ? s.bottomBorder : null]}>
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
          <CheckBox
            value={value}
            onValueChange={onValueChange}
            tintColors={{
              true: colors.darkBlue,
              false: {},
            }}
          />
        )}
      </Touchable>
    );
  };
  renderActionItem = (itemTitle, isBorder, value, onValueChange) => {
    return (
      <Touchable
        style={[s.actionItemWrapper, isBorder ? s.bottomBorder : null]}>
        <View style={s.leftContent}>
          <TextView type={'label'} text={itemTitle} style={s.itemTitleStyle} />
        </View>
        <CheckBox
          value={value}
          onValueChange={onValueChange}
          tintColors={{
            true: colors.darkBlue,
            false: {},
          }}
        />
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
    paddingHorizontal: lessIndent - 1,
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
    paddingVertical: lessIndent - 1,
    paddingHorizontal: lessIndent - 1,
  },
});
export default GeneralSettings;
