/* eslint-disable no-console */
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, CardType, City} from '../../const';
import Header from '../header/header';
import {getIsOffersFavoriteLoaded, getOffersFavorite} from '../../store/favorites-data/selectors';
import {useEffect} from 'react';
import {changeFavoriteStatus, fetchFavorites} from '../../store/api-action';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoritesScreenEmpty from '../favorites-screen/favorites-screen-empty';
import CardList from '../card-list/card-list';
import {switchCity, updateFavorites} from '../../store/action';


function FavoritesScreen(): JSX.Element {
  const offersFavoriteInitial = useSelector(getOffersFavorite);
  const offersFavorite = offersFavoriteInitial.filter((offer) => offer.isFavorite);
  const isOffersFavoriteLoaded = useSelector(getIsOffersFavoriteLoaded);

  const hasNoOffers = offersFavorite.length === 0;
  const cities = [...new Set(offersFavorite.map((offer) => offer.city.name))];

  const dispatch = useDispatch();

  const handleFavoriteClick = (offerId: number, isFavorite: boolean) => {
    dispatch(changeFavoriteStatus(
      offerId,
      isFavorite,
      (updatedOffer) => {
        dispatch(updateFavorites(updatedOffer));
      },
    ));
  };

  const handleCitySwitch = (city: City) => {
    dispatch(switchCity(city));
  };

  useEffect(() => {
    dispatch(fetchFavorites());
  },[dispatch]);

  const renderFavorites = () => (
    <div className="page__favorites-container container">
      {hasNoOffers ?
        <FavoritesScreenEmpty /> :
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((place) => {
              const cityOffers = offersFavorite.filter((offer) => offer.city.name === place);
              return (
                <li key={Math.random()} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link
                        to={AppRoute.Root}
                        className="locations__item-link" href="#/"
                        onClick={() => {
                          handleCitySwitch(place as City);
                        }}
                      >
                        <span>{place}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <CardList offers={cityOffers} cardType={CardType.Favorite} onFavoriteClick={handleFavoriteClick}/>
                  </div>
                </li>
              );
            })};
          </ul>
        </section>}
    </div>
  );

  return (
    <div className={`page ${hasNoOffers ? 'page--favorites-empty' : ''}`}>
      <Header isMainPage={false} isLoginPage={false} />
      <main className={`page__main page__main--favorites ${hasNoOffers ? 'page__main--favorites-empty' : ''}`}>
        {!isOffersFavoriteLoaded ?
          <LoadingScreen /> :
          renderFavorites()}
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Root} className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
