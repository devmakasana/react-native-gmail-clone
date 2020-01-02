import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../styles';
import {borderWidth} from '../../styles/dimensions';

class Seperator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style} = this.props;
    return <View style={[s.seperator, style]} />;
  }
}

const s = StyleSheet.create({
  seperator: {
    borderBottomColor: colors.zirconGray,
    borderBottomWidth: borderWidth,
  },
});

export default Seperator;
