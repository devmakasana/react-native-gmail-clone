import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NavigationOptions from '../components/NavigationOptions';
import {IconButton, Touchable} from '../components/Button';
import {colors} from '../styles';
import AppStyles from '../styles/AppStyles';
import TextView from '../components/TextView/TextView';
import {lessIndent, indent} from '../styles/dimensions';
import {scale} from '../utils/scale';

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => {
    return NavigationOptions({
      navigation: navigation,
      headerStyle: AppStyles.headerStyle,
      headerTintColor: colors.primary,
      title: 'Settings',
      headerLeft: () => (
        <View style={AppStyles.headerLeft}>
          <IconButton
            icon={'arrow-back'}
            size={32}
            iconSize={24}
            iconColor={colors.secondary}
            iconType={'MaterialIcons'}
            style={{marginLeft: scale(7)}}
          />
        </View>
      ),
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
  render() {
    return (
      <View>
        <Touchable style={s.itemWrapper}>
          <TextView
            type={'label'}
            text={'General Settings'}
            style={s.itemTextStyle}
          />
        </Touchable>
        <Touchable style={s.itemWrapper}>
          <TextView
            type={'label'}
            text={'nayan.gnk06@gmail.com'}
            style={s.itemTextStyle}
          />
        </Touchable>
        <Touchable style={s.itemWrapper}>
          <TextView
            type={'label'}
            text={'devonayan@gmail.com'}
            style={s.itemTextStyle}
          />
        </Touchable>
        <Touchable style={s.itemWrapper}>
          <TextView
            type={'label'}
            text={'gabani.nayan@gmail.com'}
            style={s.itemTextStyle}
          />
        </Touchable>
        <Touchable style={s.itemWrapper}>
          <TextView
            type={'label'}
            text={'nayan@pixer.io'}
            style={s.itemTextStyle}
          />
        </Touchable>
        <Touchable style={s.itemWrapper}>
          <TextView
            type={'label'}
            text={'Add account'}
            style={s.itemTextStyle}
          />
        </Touchable>
      </View>
    );
  }
}
const s = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: lessIndent - 1,
    paddingVertical: indent - 1,
  },
  itemTextStyle: {
    color: colors.primary,
    letterSpacing: 0.15,
  },
});
export default Settings;
