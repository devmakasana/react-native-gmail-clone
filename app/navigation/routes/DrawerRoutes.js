import React, {Component} from 'react';
import svgs from '../../assets/svg';
import screens from '../../constants/screens';
import AllInboxes from '../../screens/AllInboxes';
import Primary from '../../screens/Primary';
import {IconButton} from '../../components/Button';
import {colors, fontWeights} from '../../styles';
import Social from '../../screens/Social';
import Promotions from '../../screens/Promotions';
import Starred from '../../screens/Starred';
import Snoozed from '../../screens/Snoozed';
import Important from '../../screens/Important';
import Sent from '../../screens/Sent';
import Scheduled from '../../screens/Scheduled';
import Outbox from '../../screens/Outbox';
import Drafts from '../../screens/Drafts';
import AllMail from '../../screens/AllMail';
import Spam from '../../screens/Spam';
import Bin from '../../screens/Bin';
import Calendar from '../../screens/Calendar';
import Contacts from './Contacts';
import Help from '../../screens/Help';
import Settings from '../../screens/Settings';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import emailList from '../../screens/EmailList';

const Routes = {
  [screens.EmailLilst]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'All inboxes',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'allinboxes-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.PrimaryRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Primary',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'primary-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.SocialRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Social',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'social-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.PromotionsRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Promotions',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'promotions-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.StarredRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Starred',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'starred-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.SnoozedRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Snoozed',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'snoozed-icon'} width={25} height={25} />
      ),
    }),
  },
  [screens.ImportantRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Important',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'important-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.SentRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Sent',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'sent-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.ScheduledRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Scheduled',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'scheduled-icon'} width={25} height={25} />
      ),
    }),
  },
  [screens.OutboxRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Outbox',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'outbox-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.DraftsRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Drafts',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'drafts-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.AllMailRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'All mail',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'allmail-icon'} width={26} height={25} />
      ),
    }),
  },
  [screens.SpamRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Spam',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'spam-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.BinRoot]: {
    screen: emailList,
    navigationOptions: () => ({
      title: 'Bin',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'bin-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.CalendarRoot]: {
    screen: Calendar,
    navigationOptions: () => ({
      title: 'Calendar',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'calendar-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.ContactsRoot]: {
    screen: Contacts,
    navigationOptions: () => ({
      title: 'Contacts',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'contacts-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.SettingsRoot]: {
    screen: Settings,
    navigationOptions: () => ({
      title: 'Settings',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'settings-icon'} width={24} height={24} />
      ),
    }),
  },
  [screens.HelpAndFeedbackRoot]: {
    screen: Help,
    navigationOptions: () => ({
      title: 'Help and feedback',
      drawerIcon: ({tintColor}) => (
        <SvgIcon svgs={svgs} name={'help-icon'} width={24} height={24} />
      ),
    }),
  },
};
export default Routes;
