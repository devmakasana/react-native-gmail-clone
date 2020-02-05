import screens from '../constants/screens';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Routes from './routes/DrawerRoutes';
import DrawerDesign from '../components/DrawerDesign/DrawerDesign';
import {WIN_WIDTH} from '../styles/dimensions';

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
