import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AttachedFileItem from './AttachedFileItem';
import AppStyles from '../styles/AppStyles';
import TextView from './TextView/TextView';

class AttachedFileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {attachedImage, itemName} = this.props;
    return (
      <View style={AppStyles.bottomContentWrapper}>
        <AttachedFileItem attachedImage={attachedImage} itemName={itemName} />
        <AttachedFileItem attachedImage={attachedImage} itemName={itemName} />
        <TextView
          type={'span'}
          text={'+3'}
          style={AppStyles.remainingFileNumber}
        />
      </View>
    );
  }
}

export default AttachedFileComponent;
