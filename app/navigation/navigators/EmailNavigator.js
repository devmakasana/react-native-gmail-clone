import screens from '../../constants/screens';
import {createStackNavigator} from 'react-navigation-stack';
import EmailDetails from '../../screens/EmailDetails';
import EmailLilst from '../../screens/EmailList';
import ComposeEmail from '../../screens/ComposeEmail';

const EmailNavigator = createStackNavigator(
  {
    [screens.EmailLilst]: {
      screen: EmailLilst,
      navigationOptions: () => ({
        title: '',
      }),
    },
    [screens.EmailDetails]: {
      screen: EmailDetails,
      navigationOptions: () => ({
        title: '',
      }),
    },
    [screens.ComposeEmail]: {
      screen: ComposeEmail,
    },
  },
  {
    initialRouteName: screens.EmailLilst,
  },
);

export default EmailNavigator;
