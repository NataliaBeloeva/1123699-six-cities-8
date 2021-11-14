import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {logout} from '../../store/api-action';
import Logo from '../logo/logo';
import {getAuthStatus, getUser} from '../../store/user-process/selectors';

type HeaderProps = {
  isMainPage: boolean;
  isLoginPage: boolean;
}

function Header(props: HeaderProps): JSX.Element {
  const {isMainPage, isLoginPage} = props;
  const authStatus = useSelector(getAuthStatus);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const handleLogOutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logout());
  };

  const isLogged = authStatus === AuthStatus.Auth;

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

export default Header;
