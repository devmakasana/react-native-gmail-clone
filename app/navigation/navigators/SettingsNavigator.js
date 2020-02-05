import screens from '../../constants/screens';
import Settings from '../../screens/Settings';
import {createStackNavigator} from 'react-navigation-stack';

const SettingsNavigator = createStackNavigator({
  [screens.SettingsRoot]: {
    screen: Settings,
    navigationOptions: () => ({
      title: 'Settings',
    }),
  },
});

export default SettingsNavigator;