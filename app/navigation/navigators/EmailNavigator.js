import screens from '../../constants/screens';
import {createStackNavigator} from 'react-navigation-stack';
import EmailDetails from '../../screens/EmailDetails';
import ComposeEmail from '../../screens/ComposeEmail';
import EmailList from '../../screens/EmailList';

const EmailNavigator = createStackNavigator(
  {
    [screens.EmailList]: {
      screen: EmailList,
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
    initialRouteName: screens.EmailList,
  },
);

export default EmailNavigator;
