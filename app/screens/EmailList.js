import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import AppStyles from '../styles/AppStyles';
import svgs from '../assets/svg';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import Input from '../components/Input';
import AppAvtar from '../components/AppAvtar';
import {scale, scaleVertical} from '../utils/scale';
import colors from '../styles/colors';
import {indent, lessIndent, halfindent} from '../styles/dimensions';

class emailList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={[AppStyles.root, AppStyles.rootHorizontalPad]}>
        {/* Searchbar */}
        <View style={s.shadowBox}>
          <View style={s.headerSearch}>
            <SvgIcon svgs={svgs} name={'short-menu'} width={30} height={20} />
            <Input
              value={'dddd'}
              placeholder={'Search mail'}
              containerStyle={s.inputWrap}></Input>
            <AppAvtar></AppAvtar>
          </View>
        </View>
        {/* Email-Listing */}
        <View style={s.mailListing}>
          <View style={styles.container}>
            <Text style={styles.primaryText}>PRIMARY</Text>
            <View style={styles.Box}>
              <View style={styles.leftWrap}>
                <SvgIcon
                  style={styles.exportImgWrapper}
                  svgs={svgs}
                  name={'author-icon'}
                  fill={'none'}
                  width={42}
                  height={42}
                />
                <View style={styles.caption}>
                  <Text style={styles.BookText}>BookMyShow</Text>
                  <Text style={styles.Book}>
                    Prepare for the food binge of your lif...
                  </Text>
                  <Text style={styles.Bill}>
                    Book for the Ahmedabad Food Fest...
                  </Text>
                </View>
              </View>
              <View style={styles.rightWrap}>
                <Text style={styles.day}>26 Dec</Text>
                <SvgIcon
                  style={styles.exportImgWrapper}
                  svgs={svgs}
                  name={'vector-icon'}
                  fill={'none'}
                  width={28}
                  height={28}
                />
              </View>
            </View>

            {/* tow */}
            <View style={styles.Tow}>
              <View style={styles.Box}>
                <View style={styles.leftWrap}>
                  <SvgIcon
                    style={styles.exportImgWrapper}
                    svgs={svgs}
                    name={'author-icon'}
                    fill={'none'}
                    width={42}
                    height={42}
                  />
                  <View style={styles.caption}>
                    <Text style={styles.BookText}>BookMyShow</Text>
                    <Text style={styles.Book}>
                      Prepare for the food binge of your lif...
                    </Text>
                    <Text style={styles.Bill}>
                      Book for the Ahmedabad Food Fest...
                    </Text>
                  </View>
                </View>
                <View style={styles.rightWrap}>
                  <Text style={styles.day}>26 Dec</Text>
                  <SvgIcon
                    style={styles.exportImgWrapper}
                    svgs={svgs}
                    name={'vector-icon'}
                    fill={'none'}
                    width={28}
                    height={28}
                  />
                </View>
              </View>
            </View>
            {/* threee */}
            <View style={styles.Box}>
              <View style={styles.leftWrap}>
                <SvgIcon
                  style={styles.exportImgWrapper}
                  svgs={svgs}
                  name={'author-icon'}
                  fill={'none'}
                  width={42}
                  height={42}
                />
                <View style={styles.caption}>
                  <Text style={styles.BookText}>BookMyShow</Text>
                  <Text style={styles.Book}>
                    Prepare for the food binge of your lif...
                  </Text>
                  <Text style={styles.Bill}>
                    Book for the Ahmedabad Food Fest...
                  </Text>
                </View>
              </View>
              <View style={styles.rightWrap}>
                <Text style={styles.day}>26 Dec</Text>
                <SvgIcon
                  style={styles.exportImgWrapper}
                  svgs={svgs}
                  name={'vector-icon'}
                  fill={'none'}
                  width={28}
                  height={28}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  shadowBox: {
    borderRadius: 7,
    marginTop: lessIndent,
    shadowColor: colors.boxShadowColor,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 12,
    backgroundColor: colors.white,
  },
  headerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: scaleVertical(11),
    paddingRight: scale(14),
    paddingLeft: scale(19),
  },
  inputWrap: {
    flex: 1,
    marginLeft: scale(lessIndent),
    marginRight: scale(lessIndent),
    paddingHorizontal: scaleVertical(0),
  },
  // Email LIsting
  container: {
    padding: 16,
  },
  primaryText: {
    color: colors.secondary,
    ...Typography.subTitle,
    marginBottom: scaleVertical(21),
  },
  caption: {
    paddingHorizontal: 18,
  },
  Book: {
    ...Typography.caption,
    color: colors.primary,
    letterSpacing: 0.3,
    fontWeight: fontWeights.bold,
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  leftWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  BookText: {
    ...Typography.label,
    color: colors.primary,
    fontSize: fontSizes.lable,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.4,
  },
  Bill: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Roboto',
    letterSpacing: 0.4,
    color: colors.secondary,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  rightWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {
    ...Typography.span,
    color: colors.black,
    fontWeight: fontWeights.bold,
    fontStyle: 'normal',
    alignItems: 'center',
    flex: 1,
    marginTop: scaleVertical(4),
  },
});

export default emailList;
