import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import {scale} from '../utils/scale';

export class Primary extends Component {
  ComposeEmail = () => {
    this.props.navigation.navigate('ComposeEmail');
  };
  render() {
    return (
      <View>
        <Text> Primary </Text>
        <TouchableOpacity activeOpacity={0.8} onPress={this.ComposeEmail}>
          <SvgIcon svgs={svgs} name={'compose-icon'} width={24} height={24} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Primary;
