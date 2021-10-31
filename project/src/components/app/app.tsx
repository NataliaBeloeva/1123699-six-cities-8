import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import {Reviews} from '../../types/review';
import {State} from '../../types/state';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  reviews: Reviews;
}

const mapStateToProps = ({offers}: State) => ({
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentConnectedProps = AppScreenProps & PropsFromRedux;

function App(props: ComponentConnectedProps): JSX.Element {
  const {offers, reviews} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen offer={offers[0]} offers={offers} reviews={reviews} />
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites}
          render={() => <FavoritesScreen offers={offers}/>}
        >
        </PrivateRoute>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
