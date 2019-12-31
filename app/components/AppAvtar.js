import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-svg';
import {scale} from '../utils/scale';
import colors from '../styles/colors';

class AppAvtar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.appAvtarBox}>
        <Image source={require('../assets/images/profileBg.png')} />
      </View>
    );
  }
}

const s = StyleSheet.create({
  appAvtarBox: {
    width: scale(31),
    height: scale(31),
    backgroundColor: colors.silverGray,
    borderRadius: 50,
    overflow: 'hidden',
  },
});

export default AppAvtar;
