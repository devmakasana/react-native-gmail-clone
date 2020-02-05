import React, {Component} from 'react';
import {View} from 'react-native';
import colors from '../styles/colors';
import SvgIcon from 'react-native-svg-icon/lib/components/SvgIcon';
import svgs from '../assets/svg';
import AppAvtar from './Avtar/AppAvtar';
import TextView from './TextView/TextView';
import Touchable from './Button/Touchable';
import Swipeable from 'react-native-swipeable';
import {IconButton} from './Button';
import AppStyles from '../styles/AppStyles';
import AttachedFileComponent from './AttachedFileComponent';

class MailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {leftActionActivated: false, rightActionActivated: false};
  }

  handleScroll = () => {
    const {currentlyOpenSwipeable} = this.state;

    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter();
    }
  };

  render() {
    const {style, item, onPressItem, thumbnailPath} = this.props;
    const {leftActionActivated, rightActionActivated} = this.state;

    return (
      <View
        style={[
          {
            marginBottom: 4,
          },
          leftActionActivated && AppStyles.activeArchiveStripeWrapper,
          rightActionActivated && AppStyles.activeArchiveStripeWrapper,
        ]}>
        <Swipeable
          leftActionActivationDistance={0}
          rightActionActivationDistance={0}
          leftContent={
            <View style={AppStyles.leftContent}>
              <SvgIcon
                svgs={svgs}
                name={'archive-icon'}
                fill={colors.white}
                width={19}
                height={19}
              />
            </View>
          }
          rightContent={
            <View style={AppStyles.rightContent}>
              <SvgIcon
                svgs={svgs}
                name={'archive-icon'}
                fill={colors.white}
                width={19}
                height={19}
              />
            </View>
          }
          onLeftActionActivate={() =>
            this.setState({leftActionActivated: true})
          }
          onRightActionActivate={() =>
            this.setState({rightActionActivated: true})
          }
          onLeftActionDeactivate={() =>
            this.setState({leftActionActivated: false})
          }
          onRightActionDeactivate={() =>
            this.setState({rightActionActivated: false})
          }
          onLeftActionComplete={() => this.setState()}
          onRightActionComplete={() => this.setState()}>
          <Touchable
            style={[
              AppStyles.mailItemCover,
              leftActionActivated && AppStyles.activeArchiveStripe,
              rightActionActivated && AppStyles.activeArchiveStripe,
              style,
            ]}
            onPress={onPressItem}
            onLongPress={this._onLongPressButton}>
            <View
              style={[
                AppStyles.mailItem,
                item.unread && AppStyles.longPressSelectedItem,
                leftActionActivated && AppStyles.selectedItem,
              ]}>
              <View style={AppStyles.mailItemWrap}>
                {/* Icon */}
                <View
                  style={
                    item.unread && [
                      AppStyles.profileIcon,
                      AppStyles.selectPrfIcon,
                    ]
                  }>
                  <AppAvtar Size={40} Imgsrc={thumbnailPath} />
                  {/* onLongPress Checkmark View */}
                  <View
                    style={[
                      AppStyles.selectUserWrap,
                      item.unread && AppStyles.activeSelectUser,
                    ]}>
                    <SvgIcon
                      svgs={svgs}
                      name={'select-author'}
                      width={22}
                      height={22}
                    />
                  </View>
                </View>
                {/* Text */}
                <View style={AppStyles.mlContainer}>
                  <View style={AppStyles.mailInfoBold}>
                    <TextView
                      type={'label'}
                      style={[
                        AppStyles.mailSender,
                        item.unread && AppStyles.unreadText,
                      ]}
                      text={item.sender.name}
                    />
                    <TextView
                      type={'span'}
                      style={[
                        AppStyles.mailDate,
                        item.unread && AppStyles.unreadTimeText,
                      ]}
                      text={item.date}
                    />
                  </View>
                  <View style={AppStyles.mailInfo}>
                    {/* Mail Info */}
                    <View style={AppStyles.mlContainer}>
                      <TextView
                        type={'caption'}
                        style={[
                          AppStyles.mailSub,
                          item.unread && AppStyles.unreadText,
                        ]}
                        numberOfLines={1}
                        text={item.subject}
                      />
                      <TextView
                        type={'caption'}
                        style={AppStyles.mailDesc}
                        numberOfLines={1}
                        text={item.description}
                      />
                    </View>
                    {/* Mail Star */}
                    <IconButton
                      icon={'star-outline'}
                      iconColor={colors.darkGray}
                      iconType={'materialcommunityicons'}
                      size={30}
                      iconSize={22}
                    />
                  </View>
                  {!!item.isFileAttached && (
                    <View style={AppStyles.attachedFileWrapper}>
                      <AttachedFileComponent
                        attachedImage={'attached-image-icon'}
                        itemName={'ANIL951689456'}
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>
          </Touchable>
        </Swipeable>
      </View>
    );
  }
}
export default MailItem;
