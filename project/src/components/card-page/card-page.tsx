import {useState} from 'react';
import {Offer, Offers} from '../../types/offer';
import {CardType, City, MapType} from '../../const';
import CardList from '../card-list/card-list';
import MainScreenEmpty from '../main-screen/main-screen-empty';
import SortOptions from '../sort-options/sort-options';
import Map from '../map/map';

type CardPageProps = {
  currentCity: City;
  offers: Offers;
  hasNoOffers: boolean;
}

function CardPage(props: CardPageProps): JSX.Element {
  const {currentCity, offers, hasNoOffers} = props;

  const [selectedCard, setSelectedCard] = useState<Offer | undefined>(undefined);

  const handleCardMouseEnter = (offerId: number) => {
    const currentCard = offers.find((offer) => offer.id === offerId);
    setSelectedCard(currentCard);
  };

  const handleCardMouseLeave = () => {
    setSelectedCard(undefined);
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
              <CardList offers={offers} cardType={CardType.City} handleCardMouseEnter={handleCardMouseEnter} handleCardMouseLeave={handleCardMouseLeave}/>
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
