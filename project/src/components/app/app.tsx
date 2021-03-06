import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {

  return (
    <Switch>
      <Route exact path={AppRoute.Root}>
        <MainScreen />
      </Route>
      <Route exact path={AppRoute.SignIn}>
        <LoginScreen />
      </Route>
      <Route exact path={`${AppRoute.Room}/:id`}>
        <PropertyScreen />
      </Route>
      <PrivateRoute exact path={AppRoute.Favorites}
        render={() => <FavoritesScreen />}
      >
      </PrivateRoute>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

export default App;
