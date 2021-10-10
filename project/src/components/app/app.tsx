import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import {Offers} from '../../types/offer';
import {Reviews} from '../../types/review';

type AppScreenProps = {
  placeCount: number;
  offers: Offers;
  reviews: Reviews;
}

function App({placeCount, offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen placeCount={placeCount} offers={offers}/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen offer={offers[0]} reviews={reviews}/>
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites}
          render={() => <FavoritesScreen  offers={offers}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
