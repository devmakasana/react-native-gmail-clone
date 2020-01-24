import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import {scale} from '../utils/scale';

export class AllInboxes extends Component {
  EmailDetails = () => {
    this.props.navigation.navigate('EmailDetails');
  };

  render() {
    return (
      <View>
        <Text> AllInboxes </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={this.EmailDetails}>
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

export default AllInboxes;
