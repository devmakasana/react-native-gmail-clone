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
import Contacts from '../../screens/Contacts';
import Help from '../../screens/Help';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import EmailList from '../../screens/EmailList';
import SettingsNavigator from '../navigators/SettingsNavigator';
const Routes = {
  [screens.AllInboxesRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   drawerLabel: 'All inboxes',
    //   drawerIcon: ({focused}) => (
    //     <SvgIcon svgs={svgs} name={'allinboxes-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.PrimaryRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   drawerLabel: 'Primary',
    //   drawerIcon: ({focused}) => (
    //     <SvgIcon
    //       svgs={svgs}
    //       name={'primary-icon'}
    //       width={24}
    //       height={24}
    //       fill={focused ? '#D93025' : '#3C4043'}
    //     />
    //   ),
    // }),
  },
  [screens.SocialRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   drawerLabel: 'Social',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'social-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.PromotionsRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   drawerLabel: 'Promotions',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'promotions-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.StarredRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'Starred',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'starred-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.SnoozedRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'Snoozed',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'snoozed-icon'} width={25} height={25} />
    //   ),
    // }),
  },
  [screens.ImportantRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'Important',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'important-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.SentRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'Sent',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'sent-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.ScheduledRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'Scheduled',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'scheduled-icon'} width={25} height={25} />
    //   ),
    // }),
  },
  [screens.OutboxRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'Outbox',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'outbox-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.DraftsRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'Drafts',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'drafts-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.AllMailRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'All mail',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'allmail-icon'} width={26} height={25} />
    //   ),
    // }),
  },
  [screens.SpamRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'Spam',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'spam-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.BinRoot]: {
    screen: EmailList,
    // navigationOptions: () => ({
    //   title: 'Bin',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'bin-icon'} width={24} height={24} />
    //   ),
    // }),
  },

  [screens.CalendarRoot]: {
    screen: Calendar,
    // navigationOptions: () => ({
    //   title: 'Calendar',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'calendar-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.ContactsRoot]: {
    screen: Contacts,
    // navigationOptions: () => ({
    //   title: 'Contacts',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'contacts-icon'} width={24} height={24} />
    //   ),
    // }),
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
    // navigationOptions: () => ({
    //   title: 'Settings',
    //   // drawerIcon: ({tintColor}) => (
    //   //   <SvgIcon svgs={svgs} name={'settings-icon'} width={24} height={24} />
    //   // ),
    // }),
  },
  [screens.HelpAndFeedbackRoot]: {
    screen: Help,
    // navigationOptions: () => ({
    //   title: 'Help and feedback',
    //   drawerIcon: ({tintColor}) => (
    //     <SvgIcon svgs={svgs} name={'help-icon'} width={24} height={24} />
    //   ),
    // }),
  },
};
export default Routes;
