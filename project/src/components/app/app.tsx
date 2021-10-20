import {useState} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import {Offer, Offers} from '../../types/offer';
import {Reviews} from '../../types/review';

type AppScreenProps = {
  placeCount: number;
  offers: Offers;
  reviews: Reviews;
}

function App(props: AppScreenProps): JSX.Element {
  const {placeCount, offers, reviews} = props;

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const handleCardMouseEnter = (listItemId: number) => {
    const currentPoint = offers.find((offer) => offer.id === listItemId);
    setSelectedPoint(currentPoint);
  };

  const handleCardMouseLeave = () => {
    setSelectedPoint(undefined);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen placeCount={placeCount} offers={offers} handleCardMouseEnter={handleCardMouseEnter} handleCardMouseLeave={handleCardMouseLeave} selectedPoint={selectedPoint}/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen offer={offers[0]} offers={offers} reviews={reviews} handleCardMouseEnter={handleCardMouseEnter} handleCardMouseLeave={handleCardMouseLeave} selectedPoint={selectedPoint}/>
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
