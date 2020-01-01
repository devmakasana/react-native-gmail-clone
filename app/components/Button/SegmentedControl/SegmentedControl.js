import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import T from 'prop-types';
import TabOption from './TabOption';
import {colors} from '../../../styles';
import {borderWidth} from '../../../styles/dimensions';

const handleTabPress = (index, multiple, selectedIndex, onTabPress) => {
  if (multiple) {
    onTabPress(index);
  } else if (selectedIndex !== index) {
    onTabPress(index);
  }
};

const getAccessibilityLabelByIndex = (accessibilityLabels, index) =>
  accessibilityLabels &&
  accessibilityLabels.length > 0 &&
  accessibilityLabels[index]
    ? accessibilityLabels[index]
    : undefined;

class SegmentedControl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    values: ['One', 'Two', 'Three'],
    accessible: true,
    accessibilityLabels: [],
    badges: ['', '', ''],
    multiple: false,
    selectedIndex: 0,
    selectedIndices: [0],
    onTabPress: () => {},
    tabsContainerStyle: {},
    tabsContainerDisableStyle: {opacity: 0.6},
    tabStyle: {},
    firstTabStyle: {},
    lastTabStyle: {},
    activeTabStyle: {},
    tabTextStyle: {},
    activeTabTextStyle: {},
    tabBadgeContainerStyle: {},
    activeTabBadgeContainerStyle: {},
    tabBadgeStyle: {},
    activeTabBadgeStyle: {},
    borderRadius: 12,
    textNumberOfLines: 1,
    allowFontScaling: true,
    activeTabOpacity: 1,
    enabled: true,
  };

  render() {
    const {
      multiple,
      selectedIndex,
      selectedIndices,
      values,
      badges,
      borderRadius,
      tabsContainerStyle,
      tabsContainerDisableStyle,
      tabStyle,
      firstTabStyle,
      lastTabStyle,
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
      accessibilityLabels,
      activeTabOpacity,
      enabled,
    } = this.props;
    const firstTabStyleDefault = [
      {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
      },
    ];
    const lastTabStyleDefault = [
      {
        borderLeftWidth: 0,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      },
    ];

    const tabsContainerStyles = [styles.tabsContainerStyle, tabsContainerStyle];
    if (!enabled) {
      tabsContainerStyles.push(tabsContainerDisableStyle);
    }
    return (
      <View style={tabsContainerStyles} removeClippedSubviews={false}>
        {values &&
          values.map((item, index) => {
            const accessibilityText = getAccessibilityLabelByIndex(
              accessibilityLabels,
              index,
            );
            return (
              <TabOption
                key={item}
                index={index}
                badge={badges && badges[index] ? badges[index] : false}
                isTabActive={
                  multiple
                    ? selectedIndices.includes(index)
                    : selectedIndex === index
                }
                text={item}
                textNumberOfLines={textNumberOfLines}
                onTabPress={indexs =>
                  handleTabPress(indexs, multiple, selectedIndex, onTabPress)
                }
                firstTabStyle={
                  index === 0
                    ? [
                        {borderRightWidth: 0},
                        firstTabStyleDefault,
                        firstTabStyle,
                      ]
                    : {}
                }
                lastTabStyle={
                  index === values.length - 1
                    ? [{borderLeftWidth: 0}, lastTabStyleDefault, lastTabStyle]
                    : {}
                }
                tabStyle={[
                  tabStyle,
                  index !== 0 && index !== values.length - 1
                    ? {marginLeft: -1}
                    : {},
                ]}
                activeTabStyle={activeTabStyle}
                tabTextStyle={tabTextStyle}
                activeTabTextStyle={activeTabTextStyle}
                tabBadgeContainerStyle={tabBadgeContainerStyle}
                activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
                tabBadgeStyle={tabBadgeStyle}
                activeTabBadgeStyle={activeTabBadgeStyle}
                allowFontScaling={allowFontScaling}
                activeTabOpacity={activeTabOpacity}
                accessible={accessible}
                accessibilityLabel={accessibilityText || item}
                enabled={enabled}
              />
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  tabStyle: {
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: borderWidth,
    backgroundColor: colors.white,
  },
});

SegmentedControl.propTypes = {
  tabStyle: T.any,
  firstTabStyle: T.any,
  lastTabStyle: T.any,
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
  enabled: T.bool,
  values: T.array,
  badges: T.array,
  multiple: T.bool,
  selectedIndex: T.number,
  selectedIndices: T.array,
  tabsContainerStyle: T.any,
  tabsContainerDisableStyle: T.any,
  borderRadius: T.number,
  accessibilityLabels: T.array,
};

export default SegmentedControl;
