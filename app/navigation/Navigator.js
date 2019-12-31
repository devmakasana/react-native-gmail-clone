import {urlPrefix} from '../constants/constant';
import {createSwitchNavigator} from 'react-navigation';
import screens from '../constants/screens';
import emailList from '../screens/EmailList';

const routes = {
  [screens.EmailLilst]: {
    screen: emailList,
  },
};

const config = {
  initialRouteParams: 'EmailLilst',
  headerMode: 'none',
};

const Navigator = createSwitchNavigator(routes, config);
Navigator.urlPrefix = urlPrefix;
export default Navigator;
