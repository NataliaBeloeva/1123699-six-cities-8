import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {Offer, Offers} from '../../types/offer';
import {AppRoute, AuthStatus, CardType, City, MapType} from '../../const';
import CardList from '../card-list/card-list';
import MainScreenEmpty from '../main-screen/main-screen-empty';
import SortOptions from '../sort-options/sort-options';
import Map from '../map/map';
import {changeFavoriteStatus} from '../../store/api-action';
import {getAuthStatus} from '../../store/user-process/selectors';

type CardPageProps = {
  currentCity: City;
  offers: Offers;
  hasNoOffers: boolean;
}

function CardPage(props: CardPageProps): JSX.Element {
  const {currentCity, offers, hasNoOffers} = props;
  const authStatus = useSelector(getAuthStatus);

  const history = useHistory();
  const dispatch = useDispatch();

  const [selectedCard, setSelectedCard] = useState<Offer | undefined>(undefined);

  const handleCardMouseEnter = (offerId: number) => {
    const currentCard = offers.find((offer) => offer.id === offerId);
    setSelectedCard(currentCard);
  };

  const handleCardMouseLeave = () => {
    setSelectedCard(undefined);
  };

  const handleFavoriteClick = (offerId: number, isFavorite: boolean) => {
    if (authStatus !== AuthStatus.Auth) {
      history.push(AppRoute.SignIn);
      return;
    }
    dispatch(changeFavoriteStatus(offerId, isFavorite));
  };

  return (
    <div className="cities">
      {hasNoOffers ?
        <MainScreenEmpty currentCity={currentCity} /> :
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentCity}</b>
            <SortOptions />
            <div className="cities__places-list places__list tabs__content">
              <CardList offers={offers} cardType={CardType.City} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave} onFavoriteClick={handleFavoriteClick}/>
            </div>
          </section>
          <div className="cities__right-section">
            <Map offers={offers} mapType={MapType.City} selectedPoint={selectedCard}/>
          </div>
        </div>}
    </div>
  );
}

export default CardPage;
