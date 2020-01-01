'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  Animated,
  Easing,
  View,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import Input from './Input';
import {halfindent} from '../styles/dimensions';
import {colors} from '../styles';

export default class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    var state = {
      text: this.props.value,
      dirty: this.props.value || this.props.placeholder,
    };

    var style = state.dirty ? dirtyStyle : cleanStyle;
    state.labelStyle = {
      fontSize: new Animated.Value(style.fontSize),
      top: new Animated.Value(style.top),
    };

    return state;
  };

  componentWillReceiveProps(props) {
    if (typeof props.value !== 'undefined' && props.value !== this.state.text) {
      this.setState({text: props.value, dirty: !!props.value});
      this._animate(!!props.value);
    }
  }

  _animate = dirty => {
    var nextStyle = dirty ? dirtyStyle : cleanStyle;
    var labelStyle = this.state.labelStyle;
    var anims = Object.keys(nextStyle).map(prop => {
      return Animated.timing(
        labelStyle[prop],
        {
          toValue: nextStyle[prop],
          duration: 200,
        },
        Easing.ease,
      );
    });

    Animated.parallel(anims).start();
  };

  _onFocus = e => {
    this._animate(true);
    this.setState({dirty: true});
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  _onBlur = e => {
    if (!this.state.text) {
      this._animate(false);
      this.setState({dirty: false});
    }

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  onChangeText = text => {
    this.setState({text});
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  };

  updateText = event => {
    var text = event.nativeEvent.text;
    this.setState({text});

    if (this.props.onEndEditing) {
      this.props.onEndEditing(event);
    }
  };

  _renderLabel = () => {
    return (
      <Animated.Text
        ref="label"
        style={[this.state.labelStyle, styles.label, this.props.labelStyle]}>
        {this.props.children}
      </Animated.Text>
    );
  };

  render() {
    var props = {
        autoCapitalize: this.props.autoCapitalize,
        autoCorrect: this.props.autoCorrect,
        autoFocus: this.props.autoFocus,
        bufferDelay: this.props.bufferDelay,
        clearButtonMode: this.props.clearButtonMode,
        clearTextOnFocus: this.props.clearTextOnFocus,
        controlled: this.props.controlled,
        editable: this.props.editable,
        enablesReturnKeyAutomatically: this.props.enablesReturnKeyAutomatically,
        keyboardType: this.props.keyboardType,
        multiline: this.props.multiline,
        numberOfLines: this.props.numberOfLines,
        onBlur: this._onBlur,
        onChange: this.props.onChange,
        onChangeText: this.onChangeText,
        onEndEditing: this.updateText,
        onFocus: this._onFocus,
        ref: this.props.myRef,
        onSubmitEditing: this.props.onSubmitEditing,
        password: this.props.secureTextEntry || this.props.password, // Compatibility
        placeholder: this.props.placeholder,
        secureTextEntry: this.props.secureTextEntry || this.props.password, // Compatibility
        returnKeyType: this.props.returnKeyType,
        selectTextOnFocus: this.props.selectTextOnFocus,
        selectionState: this.props.selectionState,
        selectionColor: this.props.selectionColor,
        style: [styles.input],
        testID: this.props.testID,
        accessibilityLabel: this.props.accessibilityLabel,
        value: this.state.text,
        underlineColorAndroid: this.props.underlineColorAndroid, // android TextInput will show the default bottom border
        onKeyPress: this.props.onKeyPress,
      },
      elementStyles = [styles.element];

    if (this.props.inputStyle) {
      props.style.push(this.props.inputStyle);
    }

    if (this.props.style) {
      elementStyles.push(this.props.style);
    }

    return (
      <View style={elementStyles}>
        {this._renderLabel()}
        <Input
          {...props}
          containerStyle={{backgroundColor: 'transperent', margin: 0}}
          style={{}}></Input>
      </View>
    );
  }
}

var labelStyleObj = {
  marginTop: 16,
  paddingLeft: 18,
  color: '#AAA',
  position: 'absolute',
};

if (Platform.OS === 'web') {
  labelStyleObj.pointerEvents = 'none';
}

var styles = StyleSheet.create({
  element: {
    position: 'relative',
    marginVertical: 1,
    backgroundColor: colors.white,
    marginTop: 10,
  },
  input: {},
  label: labelStyleObj,
});

var cleanStyle = {
  fontSize: 20,
  top: -3,
};

var dirtyStyle = {
  fontSize: 12,
  top: -18,
};
