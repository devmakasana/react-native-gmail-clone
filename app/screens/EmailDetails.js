import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationOptions from '../components/NavigationOptions';
import {colors} from '../styles';
import Icon from '../components/Icon';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import {scale} from '../utils/scale';

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
          <SvgIcon
            svgs={svgs}
            name={'archive-icon'}
            fill={colors.secondary}
            width={scale(19)}
            height={scale(19)}
            style={{marginRight: scale(25)}}
          />
          <Icon
            name={'trash-can-outline'}
            color={colors.secondary}
            type={'materialcommunityicons'}
            size={scale(24)}
            style={{marginRight: scale(25)}}
          />
          <Icon
            name={'email-outline'}
            color={colors.secondary}
            type={'materialcommunityicons'}
            size={scale(24)}
            style={{marginRight: scale(20)}}
          />
          <Icon
            name={'dots-vertical'}
            color={colors.secondary}
            type={'materialcommunityicons'}
            size={scale(24)}
          />
        </View>
      ),
    });
  };

  render() {
    return (
      <View>
        <Text> EmailDetails </Text>
      </View>
    );
  }
}
const s = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default EmailDetails;
