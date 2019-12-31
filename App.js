/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Platform, Text} from 'react-native';
import AppStyles from './app/styles/AppStyles';
import {AppNavigator} from './app/navigation';
import {Provider} from 'react-redux';
import store from './app/store/store';

export default class App extends Component {
  static navigationOptions = ({navigation}) => {
    return NavigationOptions({
      title: 'Personal details',
      navigation: navigation,
      headerStyle: AppStyles.headerStyle,
      headerTitleStyle: AppStyles.headerTitleStyle,
      headerTintColor: colors.black,
    });
  };

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Platform :', Platform.OS);
  }

  render() {
    return (
      <View style={AppStyles.rootStyle}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}
