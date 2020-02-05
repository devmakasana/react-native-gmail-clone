import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import NavigationOptions from '../components/NavigationOptions';
import {colors} from '../styles';
import {scale} from '../utils/scale';
import TextView from '../components/TextView/TextView';
import {IconButton, Touchable} from '../components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import AppAvtar from '../components/Avtar/AppAvtar';
import {indent} from '../styles/dimensions';
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
      headerStyle: AppStyles.headerStyle,
      headerTintColor: colors.secondary,
      headerRight: () => (
        <View style={AppStyles.headerRight}>
          <IconButton
            icon={'archive'}
            size={32}
            iconSize={24}
            iconColor={colors.secondary}
            iconType={'MaterialIcons'}
            style={{marginRight: 18}}
          />
          <IconButton
            icon={'trash-can-outline'}
            size={32}
            iconSize={24}
            iconColor={colors.secondary}
            iconType={'materialcommunityicons'}
            style={{marginRight: 18}}
          />
          <IconButton
            icon={'email-outline'}
            size={32}
            iconSize={24}
            iconColor={colors.secondary}
            iconType={'materialcommunityicons'}
            style={{marginRight: 13}}
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
          <View style={AppStyles.Headingstyle}>
            <TextView
              type={'headerOne'}
              text={'Sonakshi is back...swagat nahi karoge?'}
              style={AppStyles.Heading}
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
            sendDate={' 19 Dec'}
          />
          <View style={AppStyles.contentContainer}>
            <View style={AppStyles.content}>
              <TextView
                type={'subTitle'}
                text={'Gmail content'}
                style={s.gmailContent}
              />
            </View>
            <View style={AppStyles.bottomBtnWrapper}>
              <RenderActionButton
                style={AppStyles.btnStyle}
                iconName={'reply'}
                btnText={'Reply'}
              />
              <RenderActionButton
                style={AppStyles.btnStyle}
                iconName={'reply-all'}
                btnText={'Reply all'}
              />
              <RenderActionButton
                style={AppStyles.btnStyle}
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
        <Text style={s.contentWrapper}>
          <TextView type={'label'} text={emailTitle} style={s.titleText} />
          <TextView type={'span'} text={sendDate} style={s.sendDate} />
        </Text>
        <View style={s.contentWrapper}>
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
    <View style={s.contentWrapper}>
      <IconButton
        style={{marginRight: 4}}
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
  <View style={[AppStyles.touchableWrapper, style]}>
    <Touchable style={AppStyles.btnWrapper}>
      <Icon
        name={iconName}
        size={20}
        color={colors.secondary}
        type={'materialcommunityicons'}
      />
      <TextView type={'caption'} text={btnText} style={AppStyles.ReplyText} />
    </Touchable>
  </View>
);

const s = StyleSheet.create({
  titleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: scale(indent),
    marginRight: scale(5),
    marginBottom: 35,
  },
  leftContainerStyle: {
    flex: 0.98,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    marginLeft: scale(12),
    flex: 1,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: -4,
  },
  titleText: {
    color: colors.primary,
    letterSpacing: 0.2,
    fontFamily: 'ProductSans-Medium',
  },
  sendDate: {
    letterSpacing: 0.4,
    color: colors.secondary,
    fontFamily: 'Roboto-Regular',
  },
  subText: {
    color: colors.secondary,
    lineHeight: 16,
    fontFamily: 'Roboto-Regular',
  },
  gmailContent: {
    color: colors.primary,
    letterSpacing: -0.1,
    fontFamily: 'Roboto-Regular',
  },
});
export default EmailDetails;
