import {connect, ConnectedProps} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {getAuthStatus} from '../../store/user-process/selectors';
import {State} from '../../types/state';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authStatus: AuthStatus;
}

const mapStateToProps = (state: State) => ({
  authStatus: getAuthStatus(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {exact, path, render, authStatus} = props;

  return (
    <Route exact={exact} path={path} render={() => (
      authStatus === AuthStatus.Auth ?
        render() :
        <Redirect to={AppRoute.SignIn} />)}
    />
  );
}

export {PrivateRoute};
export default connector(PrivateRoute);
