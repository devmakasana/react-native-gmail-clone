import {StyleSheet} from 'react-native';
import colors from './colors';
import Typography from './Typography';
import {lessIndent, indent, halfindent, borderRadius} from './dimensions';
import {scale, scaleVertical} from '../utils/scale';
import {WIN_HEIGHT} from '../constants/constant';

const AppStyles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rootWithoutPadding: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  headerStyle: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    ...Typography.header,
    color: colors.primary,
    letterSpacing: 0.15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: scale(5),
  },
  headerText: {
    color: colors.darkBlue,
    marginLeft: scale(22),
  },

  // EmailList Header
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
  tabTitle: {
    marginTop: 18,
    marginBottom: 5,
    paddingLeft: lessIndent,
    color: colors.secondary,
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Medium',
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
  // ModalStyle
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.transparent,
    maxHeight: WIN_HEIGHT - scale(150),
  },
  // Swipable Content
  leftContent: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: colors.green,
    paddingRight: 30,
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.green,
    paddingLeft: 30,
  },
  // MailItem Style
  mailItemCover: {
    backgroundColor: colors.white,
  },
  mailDesc: {
    color: colors.secondary,
    fontFamily: 'Roboto-Regular',
  },
  mailItem: {
    paddingTop: indent - 1,
    paddingBottom: indent,
    paddingLeft: lessIndent - 1,
    paddingRight: lessIndent - 1,
    marginLeft: 5,
  },
  mailItemWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  longPressSelectedItem: {
    backgroundColor: colors.lightBlue,
    borderRadius: borderRadius,
  },
  selectedItem: {
    marginLeft: 0,
  },
  profileIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: colors.transparent,
  },
  selectPrfIcon: {
    backgroundColor: colors.darkBlue,
  },
  mailInfoBold: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: lessIndent - 1,
  },
  mailSender: {
    color: colors.secondary,
    letterSpacing: 0.15,
    flex: 1,
  },
  mailDate: {
    color: colors.secondary,
    letterSpacing: 0.4,
  },
  mailInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginLeft: lessIndent - 1,
  },
  mailSub: {
    marginVertical: 2,
    color: colors.secondary,
    fontFamily: 'Roboto-Regular',
  },
  attachedFileWrapper: {
    marginLeft: 12,
    marginTop: 10,
  },
  // Active Style
  activeMailItem: {
    backgroundColor: colors.lightBlue,
  },
  unreadText: {
    color: colors.primary,
    fontFamily: 'Roboto-Bold',
  },
  unreadTimeText: {
    color: colors.primary,
    fontFamily: 'Roboto-Medium',
  },
  selectUserWrap: {
    position: 'absolute',
    top: 0,
    flex: 1,
    zIndex: 10,
    backgroundColor: colors.darkBlue,
    borderRadius: 50,
    width: scale(40),
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
  },
  activeSelectUser: {
    opacity: 1,
  },
  activeArchiveStripe: {
    borderRadius: 10,
    shadowColor: colors.stripShadow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
  },
  activeArchiveStripeWrapper: {
    backgroundColor: colors.green,
  },
  // EmailDetails Style
  contentContainer: {
    paddingHorizontal: scale(indent),
  },
  content: {
    backgroundColor: colors.background,
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
  Headingstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: indent,
    marginRight: scale(5),
    marginLeft: scale(20),
    marginBottom: 30,
  },
  Heading: {
    color: colors.primary,
    flex: 0.9,
    flexWrap: 'wrap',
    marginRight: 'auto',
  },
  touchableWrapper: {
    borderWidth: 1,
    borderColor: colors.zirconGray,
    borderRadius: 5,
    overflow: 'hidden',
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: lessIndent - 1,
  },
  ReplyText: {
    color: colors.secondary,
    marginLeft: halfindent,
    letterSpacing: 0.4,
    fontFamily: 'ProductSans-Medium',
  },
  bottomBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    marginBottom: indent,
  },
  btnStyle: {
    flex: 0.32,
  },

  // Attached Item
  attacheItemWrapper: {
    flex: 0.49,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primaryBorderColor,
    borderRadius: 16,
    marginRight: 10,
    overflow: 'hidden',
  },
  attacheItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: lessIndent - 1,
    paddingRight: 26,
  },
  itemNameStyle: {
    color: colors.secondary,
    letterSpacing: 0.1,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
  },
  bottomContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remainingFileNumber: {
    color: colors.secondary,
    letterSpacing: 0.4,
    fontFamily: 'Roboto-Medium',
  },
});

export default AppStyles;
