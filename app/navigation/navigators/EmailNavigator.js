import screens from '../../constants/screens';
import {createStackNavigator} from 'react-navigation-stack';
import EmailDetails from '../../screens/EmailDetails';
import EmailLilst from '../../screens/EmailList';

const EmailNavigator = createStackNavigator(
  {
    [screens.EmailLilst]: {
      screen: EmailLilst,
      navigationOptions: () => ({
        title: '',
        header: () => null,
      }),
    },
    [screens.EmailDetails]: {
      screen: EmailDetails,
      navigationOptions: () => ({
        title: '',
      }),
    },
  },
  {
    initialRouteName: 'EmailLilst',
  },
);

export default EmailNavigator;
