import {urlPrefix} from '../constants/constant';
import {createSwitchNavigator} from 'react-navigation';
import screens from '../constants/screens';
import AccountModal from '../screens/AccountModal';

const routes = {
  [screens.AccountModal]: {
    screen: AccountModal,
  },
};

const config = {
  initialRouteParams: 'AccountModal',
  headerMode: 'none',
};

const Navigator = createSwitchNavigator(routes, config);
Navigator.urlPrefix = urlPrefix;
export default Navigator;
