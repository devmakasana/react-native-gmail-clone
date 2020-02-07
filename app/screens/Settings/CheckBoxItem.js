import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Touchable} from '../../components/Button';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../../assets/svg';

class CheckBoxItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {isSelected, onPress} = this.props;
    return (
      <Touchable onPress={onPress}>
        <SvgIcon
          svgs={svgs}
          name={!isSelected ? 'unchecked-icon' : 'checked-icon'}
          fill={'none'}
          width={20}
          height={20}
        />
      </Touchable>
    );
  }
}

export default CheckBoxItem;
