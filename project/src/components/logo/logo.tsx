import {Link} from 'react-router-dom';

type LogoProps = {
  isActive: boolean;
}

function Logo({isActive}: LogoProps): JSX.Element {
  const className = isActive ? 'header__logo-link header__logo-link--active' : 'header__logo-link';

  return (
    <Link className={className} to="/">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
