import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationOptions from '../components/NavigationOptions';
import {colors, fontWeights} from '../styles';
import Icon from '../components/Icon';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import {scale, scaleVertical} from '../utils/scale';
import Typography from '../styles/Typography';
import TextView from '../components/TextView/TextView';
import {IconButton, Touchable} from '../components/Button';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import AppAvtar from '../components/Avtar/AppAvtar';

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
            onPress={this.onPress}
            icon={'archive'}
            size={40}
            iconSize={scale(24)}
            iconColor={colors.secondary}
            iconType={'MaterialIcons'}
            style={{marginRight: 25}}
          />
          <IconButton
            onPress={this.onPress}
            icon={'trash-can-outline'}
            size={40}
            iconSize={scale(24)}
            iconColor={colors.secondary}
            iconType={'materialcommunityicons'}
            style={{marginRight: 25}}
          />
          <IconButton
            onPress={this.onPress}
            icon={'email-outline'}
            size={40}
            iconSize={scale(24)}
            iconColor={colors.secondary}
            iconType={'materialcommunityicons'}
            style={{marginRight: 20}}
          />
          <IconButton
            onPress={this.onPress}
            icon={'dots-vertical'}
            size={40}
            iconSize={scale(24)}
            iconColor={colors.secondary}
            iconType={'materialcommunityicons'}
          />
        </View>
      ),
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={s.container}>
          <View style={s.Headingstyle}>
            <TextView
              text={'Sonakshi is back...swagat nahi karoge?'}
              style={s.Heading}
            />
            <IconButton
              onPress={this.onPress}
              icon={'star-outline'}
              size={40}
              iconSize={scale(24)}
              iconColor={colors.darkGray}
              iconType={'materialcommunityicons'}
              style={s.Star}
            />
          </View>
          <View style={s.MeanBox}>
            <View style={s.box}>
              <AppAvtar Imgsrc={''} Size={42} />
              <TextView type={'Text'} text={'BookMyShow'} style={s.TextOne} />
              <TextView type={'Text'} text={'19 Dec'} style={s.TextTwo} />
              <TextView type={'Text'} text={'to me'} style={s.TextThree} />
              <IconButton
                style={s.headerIcon}
                onPress={this.onPress}
                icon={'keyboard-arrow-down'}
                size={40}
                iconSize={24}
                iconColor={colors.secondary}
                iconType={'materialicons'}
                style={s.dropdown}
              />
            </View>
            <View style={s.IconButton}>
              <IconButton
                onPress={this.onPress}
                icon={'reply'}
                size={40}
                iconSize={scale(24)}
                iconColor={colors.secondary}
                iconType={'materialcommunityicons'}
                style={s.ReplyIcon}
              />
              <IconButton
                onPress={this.onPress}
                icon={'dots-vertical'}
                size={40}
                iconSize={scale(24)}
                iconColor={colors.secondary}
                iconType={'materialcommunityicons'}
              />
            </View>
          </View>
          <View style={s.Content}>
            <TextView text={'Gmail content'} style={s.GmailContent} />
          </View>

          <View style={s.Button}>
            <View>
              <Touchable style={s.manageAccount}>
                <IconButton
                  icon={'reply'}
                  iconSize={scale(24)}
                  iconColor={colors.secondary}
                  iconType={'materialcommunityicons'}
                />
                <TextView type={'title'} text={'Reply'} style={s.ReplyText} />
              </Touchable>
            </View>
            <View style={s.Two}>
              <Touchable style={s.manageAccount}>
                <IconButton
                  icon={'reply-all'}
                  iconSize={scale(24)}
                  iconColor={colors.secondary}
                  iconType={'materialcommunityicons'}
                />
                <TextView
                  type={'title'}
                  text={'Reply all'}
                  style={s.ReplyText}
                />
              </Touchable>
            </View>
            <View style={s.Three}>
              <Touchable style={s.manageAccount}>
                <IconButton
                  icon={'arrow-forward'}
                  iconSize={scale(24)}
                  iconColor={colors.secondary}
                  iconType={'MaterialIcons'}
                />
                <TextView type={'title'} text={'Forward'} style={s.ReplyText} />
              </Touchable>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const s = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
  Headingstyle: {
    flexDirection: 'row',
    marginTop: scaleVertical(-8),
    marginRight: scaleVertical(27),
    marginBottom: scaleVertical(26),
  },
  Heading: {
    color: colors.primary,
    ...Typography.headerOne,
  },
  Star: {
    marginTop: scaleVertical(17),
  },
  box: {
    flexDirection: 'row',
  },
  TextOne: {
    marginLeft: scaleVertical(16),
    color: colors.primary,
    ...Typography.headingTwo,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  TextTwo: {
    marginLeft: scaleVertical(6),
    color: colors.secondary,
    ...Typography.span,
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: scaleVertical(5),
  },
  TextThree: {
    marginTop: scaleVertical(20),
    marginLeft: scaleVertical(-148),
    ...Typography.captionOne,
    color: colors.secondary,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  dropdown: {
    marginTop: scaleVertical(10),
    marginLeft: scaleVertical(-8),
  },
  IconButton: {
    flexDirection: 'row',
    marginTop: scaleVertical(-50),
  },
  ReplyIcon: {
    marginLeft: scaleVertical(302),
  },
  MeanBox: {
    marginBottom: scaleVertical(40),
  },
  Content: {
    backgroundColor: '#F5F5F5',
    height: scale(600),
  },
  GmailContent: {
    textAlign: 'center',
    fontSize: 20,
  },
  Button: {
    flexDirection: 'row',
    marginTop: scaleVertical(34),
  },
  manageAccount: {
    borderRadius: 5,
    borderColor: colors.zirconGray,
    borderWidth: 1,
    flexDirection: 'row',
    paddingLeft: scaleVertical(10),
    paddingRight: scaleVertical(20),
  },
  ReplyText: {
    color: colors.lightBlack,
    marginTop: scaleVertical(12),
    fontWeight: fontWeights.medium,
    ...Typography.footerButton,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  Two: {
    marginLeft: scaleVertical(10),
  },
  Three: {
    marginLeft: scaleVertical(10),
  },
});
export default EmailDetails;
