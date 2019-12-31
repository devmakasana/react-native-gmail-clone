/* Redux */
import {connect} from 'react-redux';
// import {
//   reduxifyNavigator,
//   createReactNavigationReduxMiddleware,
// } from 'react-navigation-redux-helpers';

/* Routes */
import RootNavigator from './Navigator';
import {createAppContainer} from 'react-navigation';

// const middleware = createReactNavigationReduxMiddleware(
//     'root',
//     state => state.nav
//   );

const AppWithNavigationState = createAppContainer(RootNavigator, 'root');

const mapStateToProps = state => ({
  // state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {RootNavigator, AppNavigator};
