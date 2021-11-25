import {FormEvent, useMemo, useRef} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/api-action';
import {getRandomPositiveInteger, validateEmail, validatePassword} from '../../utils/offer';
import Header from '../header/header';
import {AppRoute, AuthStatus, City} from '../../const';
import {switchCity} from '../../store/action';
import {getAuthStatus} from '../../store/user-process/selectors';

function LoginScreen(): JSX.Element {
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  const randomCity = useMemo(() => Object.values(City)[getRandomPositiveInteger(0, Object.values(City).length - 1)], []);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  if (authStatus === AuthStatus.Auth) {
    return <Redirect to={AppRoute.Root}/>;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      dispatch(login({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const handleInputChange = (evt: FormEvent<HTMLFormElement>) => {
    if (evt.target === loginRef.current) {
      loginRef.current.setCustomValidity(validateEmail(loginRef.current.value));
      loginRef.current.reportValidity();
    }
    if (evt.target === passwordRef.current) {
      passwordRef.current.setCustomValidity(validatePassword(passwordRef.current.value));
      passwordRef.current.reportValidity();
    }
  };

  const handleCitySwitch = (city: City) => {
    dispatch(switchCity(city));
  };

  return (
    <div className="page page--gray page--login">
      <Header isMainPage={false} isLoginPage />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit} onChange={handleInputChange}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required data-testid="email" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required data-testid="password"/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                to={AppRoute.Root}
                className="locations__item-link" href="#/"
                onClick={() => {
                  handleCitySwitch(randomCity as City);
                }}
              >
                <span>{randomCity as City}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
