import screens from '../../constants/screens';
import {createStackNavigator} from 'react-navigation-stack';
import Settings from '../../screens/Settings/Settings';
import GeneralSettings from '../../screens/Settings/GeneralSettings';

const SettingsNavigator = createStackNavigator({
  [screens.SettingsRoot]: {
    screen: Settings,
  },
  [screens.GeneralSettings]: {
    screen: GeneralSettings,
    navigationOptions: () => ({
      title: 'General Settings',
    }),
  },
});

export default SettingsNavigator;
