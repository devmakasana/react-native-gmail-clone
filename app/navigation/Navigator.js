import {urlPrefix} from '../constants/constant';
import {createSwitchNavigator} from 'react-navigation';
import screens from '../constants/screens';
import {EmailNavigator} from './navigators';
import CreateNavigator from './DrawerNavigator';
import SettingsNavigator from './navigators/SettingsNavigator';

const routes = {
  [screens.EmailLilst]: {
    screen: EmailNavigator,
  },
  [screens.DrawerRoot]: {
    screen: CreateNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

const config = {
  initialRouteParams: 'EmailLilst',
};

const Navigator = createSwitchNavigator(routes, config);
Navigator.urlPrefix = urlPrefix;
export default Navigator;
