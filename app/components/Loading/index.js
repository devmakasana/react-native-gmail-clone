import React, {Component} from 'react';
import {
  View,
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../styles';
import Typography from '../../styles/Typography';
import {indent} from '../../styles/dimensions';
import AppStyles from '../../styles/AppStyles';
import TextView from '../TextView/TextView';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {spinAnim: new Animated.Value(0)};
  }

  render() {
    return (
      <SafeAreaView style={AppStyles.root}>
        <View style={s.container}>
          <ActivityIndicator size="large" color={colors.primary} />
          <TextView
            style={[s.textStyle]}
            text={this.props.text || 'Loading...'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    zIndex: 999,
  },
  textStyle: {
    marginVertical: indent,
    color: colors.gray,
    ...Typography.bodyOne,
  },
});

export default Loading;
