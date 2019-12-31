/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Platform, Text} from 'react-native';
import styles from './app/styles/AppStyles';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Platform :', Platform.OS);
  }

  render() {
    return (
      <View style={styles.rootStyle}>
        <Text>welcome in Gmail Clone App</Text>
      </View>
    );
  }
}
