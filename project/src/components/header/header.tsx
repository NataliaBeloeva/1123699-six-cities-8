import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {ThunkAppDispatch} from '../../types/action';
import {State} from '../../types/state';
import {logoutAction} from '../../store/api-actions';
import Logo from '../logo/logo';

type HeaderProps = {
  isMainPage: boolean;
  isLoginPage: boolean;
}

const mapStateToProps = ({authorizationStatus, user}: State) => ({
  authorizationStatus,
  user,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogOutClick() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = HeaderProps & PropsFromRedux

function Header(props: ConnectedComponentProps): JSX.Element {
  const {isMainPage, isLoginPage, authorizationStatus, user, onLogOutClick} = props;
  const isLogged = authorizationStatus === AuthorizationStatus.Auth;

  const handleLogOutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onLogOutClick();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isMainPage={isMainPage} />
          </div>
          {!isLoginPage &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isLogged ?
                  <>
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${user?.avatarUrl})`}}></div>
                        <span className="header__user-name user__name">{user?.email}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link to={AppRoute.Root} className="header__nav-link" onClick={handleLogOutClick}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </> :
                  <li className="header__nav-item user">
                    <Link to={AppRoute.SignIn} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>}
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export {Header};
export default connector(Header);
