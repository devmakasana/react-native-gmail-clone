import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import NavigationOptions from '../components/NavigationOptions';
import {colors} from '../styles';
import {scale} from '../utils/scale';
import TextView from '../components/TextView/TextView';
import {IconButton, Touchable} from '../components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import AppAvtar from '../components/Avtar/AppAvtar';
import {lessIndent, halfindent, indent} from '../styles/dimensions';
import AppStyles from '../styles/AppStyles';
import Icon from '../components/Icon';

class EmailDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => {
    return NavigationOptions({
      navigation: navigation,
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: colors.secondary,
      headerRight: () => (
        <View style={s.headerRight}>
          <IconButton
            icon={'archive'}
            size={32}
            iconSize={24}
            iconColor={colors.secondary}
            iconType={'MaterialIcons'}
            style={{marginRight: 20}}
          />
          <IconButton
            icon={'trash-can-outline'}
            size={32}
            iconSize={24}
            iconColor={colors.secondary}
            iconType={'materialcommunityicons'}
            style={{marginRight: 20}}
          />
          <IconButton
            icon={'email-outline'}
            size={32}
            iconSize={24}
            iconColor={colors.secondary}
            iconType={'materialcommunityicons'}
            style={{marginRight: 15}}
          />
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

  render() {
    return (
      <SafeAreaView style={AppStyles.root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.Headingstyle}>
            <TextView
              type={'headerOne'}
              text={'Sonakshi is back...swagat nahi karoge?'}
              style={s.Heading}
            />
            <IconButton
              onPress={this.onPress}
              icon={'star-outline'}
              size={32}
              iconSize={24}
              iconColor={colors.darkGray}
              iconType={'materialcommunityicons'}
            />
          </View>
          <RenderItem
            avtarImg={''}
            emailTitle={'BookMyShow'}
            sendDate={'19 Dec'}
          />
          <View style={s.container}>
            <View style={s.Content}>
              <TextView
                type={'subTitle'}
                text={'Gmail content'}
                style={s.gmailContent}
              />
            </View>
            <View style={s.bottomBtnWrapper}>
              <RenderActionButton
                style={s.btnStyle}
                iconName={'reply'}
                btnText={'Reply'}
              />
              <RenderActionButton
                style={s.btnStyle}
                iconName={'reply-all'}
                btnText={'Reply all'}
              />
              <RenderActionButton
                style={s.btnStyle}
                iconName={'arrow-right'}
                btnText={'Forward'}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const RenderItem = ({avtarImg, emailTitle, sendDate}) => (
  <View style={s.titleItem}>
    <View style={s.leftContainerStyle}>
      <AppAvtar Imgsrc={avtarImg} size={40} />
      <View style={s.leftContent}>
        <View style={s.topTitleStyle}>
          <TextView type={'label'} text={emailTitle} style={s.titleText} />
          <TextView type={'span'} text={sendDate} style={s.sendDate} />
        </View>
        <View style={s.bottomstyle}>
          <TextView type={'caption'} text={'to me'} style={s.subText} />
          <IconButton
            style={{marginTop: 2}}
            icon={'keyboard-arrow-down'}
            size={28}
            iconSize={22}
            iconColor={colors.secondary}
            iconType={'materialicons'}
          />
        </View>
      </View>
    </View>
    <View style={s.rightContainerStyle}>
      <IconButton
        icon={'reply'}
        size={32}
        iconSize={24}
        iconColor={colors.secondary}
        iconType={'materialcommunityicons'}
      />
      <IconButton
        icon={'dots-vertical'}
        size={32}
        iconSize={24}
        iconColor={colors.secondary}
        iconType={'materialcommunityicons'}
      />
    </View>
  </View>
);

const RenderActionButton = ({style, iconName, btnText}) => (
  <View style={[s.touchableWrapper, style]}>
    <Touchable style={s.btnWrapper}>
      <Icon
        name={iconName}
        size={20}
        color={colors.secondary}
        type={'materialcommunityicons'}
      />
      <TextView type={'caption'} text={btnText} style={s.ReplyText} />
    </Touchable>
  </View>
);

const s = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: scale(5),
  },
  container: {
    paddingHorizontal: scale(indent),
  },
  Headingstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: scale(5),
    marginLeft: scale(20),
    marginBottom: 20,
  },
  Heading: {
    color: colors.primary,
    flex: 0.9,
    flexWrap: 'wrap',
    marginRight: 'auto',
  },
  titleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: scale(indent),
    marginRight: scale(5),
    marginBottom: 35,
  },
  leftContainerStyle: {
    flex: 0.95,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    marginLeft: scale(indent),
  },
  topTitleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: colors.primary,
    letterSpacing: 0.2,
    fontFamily: 'ProductSans-Medium',
  },
  sendDate: {
    marginLeft: scale(6),
    letterSpacing: 0.2,
    color: colors.secondary,
    fontFamily: 'Roboto-Regular',
  },
  bottomstyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subText: {
    color: colors.secondary,
    fontFamily: 'Roboto-Regular',
  },
  rightContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Content: {
    backgroundColor: colors.background,
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
  gmailContent: {
    color: colors.primary,
    letterSpacing: -0.1,
    fontFamily: 'Roboto-Regular',
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
});
export default EmailDetails;
