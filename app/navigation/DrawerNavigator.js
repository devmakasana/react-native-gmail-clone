import screens from '../constants/screens';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Routes from './routes/DrawerRoutes';
import {colors} from '../styles';
import DrawerDesign from '../components/DrawerDesign/DrawerDesign';

const config = {
  contentOptions: {
    activeTintColor: colors.lightBlack,
    inactiveTintColor: colors.lightBlack,
  },
  initialRouteName: screens.EmailLilst,
  contentComponent: DrawerDesign,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
};
const CreateNavigator = createDrawerNavigator(Routes, config);
export default CreateNavigator;
