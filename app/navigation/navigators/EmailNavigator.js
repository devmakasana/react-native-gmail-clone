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
        header: () => null,
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
    initialRouteName: 'EmailLilst',
  },
);

export default EmailNavigator;
