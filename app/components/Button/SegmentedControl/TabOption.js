import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import T from 'prop-types';
import {colors, fontSizes, fontWeights} from '../../../styles';

class TabOption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    isTabActive: false,
    index: 0,
    badge: '',
    firstTabStyle: {},
    lastTabStyle: {},
    tabStyle: {},
    activeTabStyle: {},
    tabTextStyle: {},
    activeTabTextStyle: {},
    tabBadgeContainerStyle: {},
    activeTabBadgeContainerStyle: {},
    tabBadgeStyle: {},
    activeTabBadgeStyle: {},
    textNumberOfLines: 1,
    allowFontScaling: false,
    accessible: true,
    activeTabOpacity: 1,
    accessibilityLabel: '',
    enabled: false,
    onTabPress: () => {},
  };

  render() {
    const {
      isTabActive,
      index,
      badge,
      text,
      firstTabStyle,
      lastTabStyle,
      tabStyle,
      activeTabStyle,
      tabTextStyle,
      activeTabTextStyle,
      tabBadgeContainerStyle,
      activeTabBadgeContainerStyle,
      tabBadgeStyle,
      activeTabBadgeStyle,
      onTabPress,
      textNumberOfLines,
      allowFontScaling,
      accessible,
      activeTabOpacity,
      accessibilityLabel,
      enabled,
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.tabStyle,
          tabStyle,
          isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
          firstTabStyle,
          lastTabStyle,
        ]}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={isTabActive ? 'selected' : 'button'}
        accessibilityComponentType="button"
        onPress={() => onTabPress(index)}
        disabled={!enabled}
        activeOpacity={activeTabOpacity}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.tabTextStyle,
              tabTextStyle,
              isTabActive
                ? [styles.activeTabTextStyle, activeTabTextStyle]
                : {},
            ]}
            numberOfLines={textNumberOfLines}
            allowFontScaling={allowFontScaling}
            ellipsizeMode="tail">
            {text}
          </Text>
          {Boolean(badge) && (
            <View
              style={[
                styles.tabBadgeContainerStyle,
                tabBadgeContainerStyle,
                isTabActive
                  ? [
                      styles.activeTabBadgeContainerStyle,
                      activeTabBadgeContainerStyle,
                    ]
                  : {},
              ]}>
              <Text
                style={[
                  styles.tabBadgeStyle,
                  tabBadgeStyle,
                  isTabActive
                    ? [styles.activeTabBadgeStyle, activeTabBadgeStyle]
                    : {},
                ]}
                allowFontScaling={allowFontScaling}>
                {badge}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    paddingTop: 12,
    paddingBottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: 'rgba(179, 182, 203, 0.48)',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
  },
  activeTabStyle: {
    backgroundColor: colors.primary,
  },
  tabTextStyle: {
    color: colors.gray,
    fontSize: fontSizes.body,
    lineHeight: 23,
    fontFamily: 'CircularStd-Medium',
  },
  activeTabTextStyle: {
    color: colors.white,
  },
  tabBadgeContainerStyle: {
    borderRadius: 20,
    backgroundColor: 'red',
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    marginBottom: 3,
  },
  activeTabBadgeContainerStyle: {
    backgroundColor: 'white',
  },
  tabBadgeStyle: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  activeTabBadgeStyle: {
    color: 'black',
  },
});

TabOption.propTypes = {
  isTabActive: T.bool,
  index: T.number,
  badge: T.any,
  text: T.string,
  firstTabStyle: T.any,
  lastTabStyle: T.any,
  tabStyle: T.any,
  activeTabStyle: T.any,
  tabTextStyle: T.any,
  activeTabTextStyle: T.any,
  tabBadgeContainerStyle: T.any,
  activeTabBadgeContainerStyle: T.any,
  tabBadgeStyle: T.any,
  activeTabBadgeStyle: T.any,
  onTabPress: T.func,
  textNumberOfLines: T.number,
  allowFontScaling: T.bool,
  accessible: T.bool,
  activeTabOpacity: T.number,
  accessibilityLabel: T.string,
  enabled: T.bool,
};
export default TabOption;
