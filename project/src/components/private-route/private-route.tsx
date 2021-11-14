import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {getAuthStatus} from '../../store/user-process/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const authStatus = useSelector(getAuthStatus);

  return (
    <Route exact={exact} path={path} render={() => (
      authStatus === AuthStatus.Auth ?
        render() :
        <Redirect to={AppRoute.SignIn} />)}
    />
  );
}

export default PrivateRoute;
