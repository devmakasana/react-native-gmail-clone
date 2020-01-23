import {urlPrefix} from '../constants/constant';
import {createSwitchNavigator} from 'react-navigation';
import screens from '../constants/screens';
import {EmailNavigator} from './navigators';

const routes = {
  [screens.EmailLilst]: {
    screen: EmailNavigator,
  },
};

const config = {
  initialRouteParams: 'EmailLilst',
  // headerMode: 'none',
};

const Navigator = createSwitchNavigator(routes, config);
Navigator.urlPrefix = urlPrefix;
export default Navigator;
