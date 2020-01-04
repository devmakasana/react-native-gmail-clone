import T from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Picker as RPicker,
  ViewPropTypes,
  Platform,
  Modal,
} from 'react-native';
import {Touchable} from './Button';
import TextView from './TextView/TextView';
import Icon from './Icon';
import {
  indent,
  InputVerticalPadding,
  halfindent,
  borderWidth,
} from '../styles/dimensions';
import {colors} from '../styles';
import {scale} from '../utils/scale';

class Picker extends Component {
  isBorderBottom = false;
  isLabelAsItem = true;

  constructor(props) {
    super(props);

    this.isBorderBottom = this.props.isBorderBottom || true;
    this.isLabelAsItem = this.props.isLabelAsItem || true;
    this.state = {
      isVisibleModal: false,
    };
  }

  componentDidMount() {
    const {selectedValue, data, itemKeyField, itemValueField} = this.props;

    if (Platform.OS == 'ios') {
      if (selectedValue && data) {
        //Get object by id to show its details
        let item = data.find(x => x[itemKeyField] == selectedValue);
        if (item) this.setPickerLabelIOS(item[itemValueField]);
        else this.setPickerLabelIOS();
      } else this.setPickerLabelIOS();
    }
  }

  onToggleModal = () => {
    this.setState({isVisibleModal: !this.state.isVisibleModal});
  };

  setPickerLabelIOS = value => {
    this.setState({selecedValueLabelIOS: value});
  };

  render() {
    if (Platform.OS == 'android') {
      return (
        <View style={[s.wrapper, this.props.containerStyle]}>
          <RPicker
            selectedValue={this.props.selectedValue}
            style={s.androidPicker}
            onValueChange={this.props.onValueChange}
            {...this.props}>
            <RPicker.Item
              label={this.props.label}
              value=""
              color={colors.gray}
            />
            {this.props.data.map(item => {
              return (
                <RPicker.Item
                  key={item[this.props.itemKeyField]}
                  label={item[this.props.itemValueField]}
                  value={item[this.props.itemKeyField]}
                />
              );
            })}
          </RPicker>
        </View>
      );
    } else {
      return (
        <View style={[this.props.containerStyle]}>
          <View
            style={[
              s.inputWrapper,
              {borderBottomWidth: this.isBorderBottom ? borderWidth : 0},
            ]}>
            <Touchable onPress={this.onToggleModal}>
              <View style={s.SelectButton}>
                {!this.state.selecedValueLabelIOS ? (
                  <TextView
                    type={'body'}
                    text={this.props.label}
                    style={s.IOSPlaceholder}
                  />
                ) : null}
                <TextView
                  text={this.state.selecedValueLabelIOS}
                  numberOfLines={1}
                  type={'body'}
                  style={s.selectedValue}
                />
                <Icon
                  name={'chevron-down'}
                  color={colors.gray}
                  size={20}
                  style={s.pickerArrow}
                />
              </View>
            </Touchable>
          </View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isVisibleModal}
            onRequestClose={this.onToggleModal}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Touchable onPress={this.onToggleModal} style={s.IOSCloseBtn} />
              <View
                style={{backgroundColor: '#ffffff', width: '100%', zIndex: 99}}>
                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Touchable
                    style={{padding: 10}}
                    onPress={() => {
                      //show selected value in label
                      if (this.props.selectedValue && this.props.data) {
                        //Get object by id to show its details
                        let item = this.props.data.find(
                          x =>
                            x[this.props.itemKeyField] ==
                            this.props.selectedValue,
                        );
                        if (item)
                          this.setPickerLabelIOS(
                            item[this.props.itemValueField],
                          );
                        else this.setPickerLabelIOS();
                      } else this.setPickerLabelIOS();

                      this.onToggleModal();
                    }}>
                    <TextView
                      text={'Select'}
                      type={'body'}
                      style={s.selectText}
                    />
                  </Touchable>
                </View>
                <RPicker
                  selectedValue={this.props.selectedValue}
                  onValueChange={this.props.onValueChange}
                  {...this.props}>
                  {this.isLabelAsItem ? (
                    <RPicker.Item label={this.props.label} value="" />
                  ) : null}
                  {this.props.data.map(item => {
                    return (
                      <RPicker.Item
                        key={item[this.props.itemKeyField]}
                        label={item[this.props.itemValueField]}
                        value={item[this.props.itemKeyField]}
                      />
                    );
                  })}
                </RPicker>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
}
Picker.propTypes = {
  containerStyle: ViewPropTypes.style,
  selectedValue: T.any,
  onValueChange: T.func.isRequired,
  label: T.string.isRequired,
  data: T.any.isRequired,
  itemKeyField: T.string.isRequired,
  itemValueField: T.string.isRequired,
  isVisibleModal: T.bool,
  onToggleModal: T.func,
  onSelectIOS: T.func,
  selecedValueLabelIOS: T.string,
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Picker);

const s = StyleSheet.create({
  androidPicker: {
    height: scale(55),
    width: '100%',
  },
  wrapper: {
    flex: 1,
    // borderTopWidth: 1,
    // borderTopColor: colors.borderColor,

    backgroundColor: colors.white,
    paddingLeft: scale(halfindent),
  },
  buttonSelect: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputWrapper: {
    // borderBottomColor: colors.borderColor,
    ...Platform.select({
      ios: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: colors.transparent,
        borderBottomColor: colors.transparent,
        backgroundColor: colors.white,
        borderRadius: 12,
      },
    }),
  },
  pickerArrow: {
    ...Platform.select({
      ios: {
        marginTop: 4,
        marginLeft: 'auto',
      },
    }),
  },
  SelectButton: {
    flex: 1,
    paddingVertical: indent - 2,
    flexDirection: 'row',
    paddingHorizontal: indent,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  selectedValue: {
    marginRight: 'auto',
  },
  selectText: {
    padding: indent,
    color: colors.primary,
  },
  IOSCloseBtn: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  IOSPlaceholder: {
    color: colors.gray,
  },
});
