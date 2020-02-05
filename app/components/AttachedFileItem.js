import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Touchable} from './Button';
import AppStyles from '../styles/AppStyles';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import TextView from './TextView/TextView';

class AttachedFileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {attachedImage, itemName} = this.props;
    return (
      <View style={AppStyles.attacheItemWrapper}>
        <Touchable style={AppStyles.attacheItemContainer}>
          <SvgIcon svgs={svgs} name={attachedImage} width={14} height={14} />
          <TextView
            type={'caption'}
            text={itemName}
            numberOfLines={1}
            style={AppStyles.itemNameStyle}
          />
        </Touchable>
      </View>
    );
  }
}

export default AttachedFileItem;
