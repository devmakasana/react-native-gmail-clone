import screens from '../constants/screens';
import Routes from './routes/DrawerRoutes';
import DrawerDesign from '../components/DrawerDesign/DrawerDesign';
import {WIN_WIDTH} from '../styles/dimensions';
import {createDrawerNavigator} from 'react-navigation-drawer';

const config = {
  initialRouteName: screens.AllInboxesRoot,
  contentComponent: DrawerDesign,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth: WIN_WIDTH - 60,
};
const CreateNavigator = createDrawerNavigator(Routes, config);
export default CreateNavigator;
