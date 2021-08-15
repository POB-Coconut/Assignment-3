import { checkAuth } from 'utils/auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTE_PATHS } from 'utils/config';
import Login from './pages/Login';
import User from './pages/User';
import Admin from './pages/Admin';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTE_PATHS.HOME} component={Login} />
      <PrivateRoute
        exact
        path={ROUTE_PATHS.USER}
        userTypes={['teacher', 'parent']}
        component={User}></PrivateRoute>
      <PrivateRoute
        exact
        path={ROUTE_PATHS.ADMIN}
        userTypes={['admin']}
        component={Admin}></PrivateRoute>
    </Switch>
  </Router>
);

const PrivateRoute = ({ component: Component, userTypes: _userTypes, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth(_userTypes) ? <Component {...props} /> : <Redirect to={ROUTE_PATHS.HOME} />
      }
    />
  );
};

export default Routes;
