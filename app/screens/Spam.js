import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import {scale} from '../utils/scale';

export class Spam extends Component {
  ComposeEmail = () => {
    this.props.navigation.navigate('ComposeEmail');
  };
  render() {
    return (
      <View>
        <Text> Spam </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={this.ComposeEmail}>
          <SvgIcon
            svgs={svgs}
            name={'compose-icon'}
            width={scale(24)}
            height={24}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Spam;
