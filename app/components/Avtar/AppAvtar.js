import React, {Component} from 'react';
import {colors} from '../../styles';
import {View, Image} from 'react-native';
import s from './styles';
import TextView from '../../components/TextView/TextView';

class AppAvtar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.Name,
      userImg: props.Imgsrc,
      size: props.Size,
      colors: [
        '#FF3B30',
        '#FF9502',
        '#FFCC02',
        '#4BD963',
        '#5AC8FA',
        '#027AFF',
        '#5856D7',
        '#FF2C54',
      ],
      seed: props.Seed,
      isborder: props.isborder ? props.isborder : false,
      textType: props.TextType ? props.TextType : 'body-one',
    };
  }

  randomIntFromInterval(min, max, seed) {
    let result = Math.floor(this.random(seed) * (max - min) + min);
    return result;
  }

  random(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    let colorIndex = 0;
    if (!this.state.seed)
      colorIndex = this.randomNumber(0, this.state.colors.length - 1);
    else
      colorIndex = this.randomIntFromInterval(
        0,
        this.state.colors.length - 1,
        this.state.seed,
      );

    var randColor = this.state.colors[colorIndex];
    return (
      <View style={this.props.style}>
        {this.state.userImg ? (
          <Image
            style={[
              s.userImage,
              this.props.Size
                ? {
                    height: this.state.size,
                    width: this.state.size,
                    borderRadius: this.state.size / 2,
                  }
                : undefined,
              this.state.isborder
                ? {borderWidth: 3, borderColor: colors.white}
                : undefined,
            ]}
            source={{uri: this.state.userImg, cache: 'force-cache'}}
          />
        ) : (
          <View
            style={[
              s.userImage,
              {backgroundColor: randColor},
              this.props.Size
                ? {
                    height: this.state.size,
                    width: this.state.size,
                    borderRadius: this.state.size / 2,
                  }
                : undefined,
              this.state.isborder
                ? {borderWidth: 3, borderColor: colors.white}
                : undefined,
            ]}>
            <TextView
              type={this.state.textType}
              style={s.userLetter}
              text={
                this.state.userName ? this.state.userName.substring(0, 1) : '#'
              }
            />
          </View>
        )}
      </View>
    );
  }
}

export default AppAvtar;
