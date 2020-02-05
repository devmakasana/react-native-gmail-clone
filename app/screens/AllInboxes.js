import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class AllInboxes extends Component {
  EmailDetails = () => {
    this.props.navigation.navigate('EmailDetails');
  };

  render() {
    return (
      <View>
        <Text> AllInboxes </Text>
      </View>
    );
  }
}

export default AllInboxes;
