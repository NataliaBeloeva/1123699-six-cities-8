import {useState} from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Offer} from '../../types/offer';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {CardType, City, MapType, SortType} from '../../const';
import CardList from '../card-list/card-list';
import CityList from '../city-list/city-list';
import Map from '../map/map';
import MainScreenEmpty from './main-screen-empty';
import Header from '../header/header';
import SortOptions from '../sort-options/sort-options';
import {switchCity} from '../../store/action';

const mapStateToProps = ({currentCity, offers, currentSortOption}: State) => ({
  currentCity,
  offers,
  currentSortOption,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleCitySwitch: (city: City) => {
    dispatch(switchCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const {currentCity, offers, currentSortOption, handleCitySwitch} = props;
  const cityOffers = offers.filter((offer) => currentCity === offer.city.name);
  const hasNoOffers = cityOffers.length === 0;

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const handleCardMouseEnter = (offerId: number) => {
    const currentPoint = offers.find((offer) => offer.id === offerId);
    setSelectedPoint(currentPoint);
  };

  const handleCardMouseLeave = () => {
    setSelectedPoint(undefined);
  };

  switch (currentSortOption) {
    case SortType.PriceHighToLow:
      cityOffers.sort((a, b) => b.price - a.price);
      break;
    case SortType.PriceLowToHigh:
      cityOffers.sort((a, b) => a.price - b.price);
      break;
    case SortType.TopRated:
      cityOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return (
    <div className="page page--gray page--main">
      <Header isMainPage isLoginPage={false}/>
      <main className="page__main page__main--index">
        <CityList currentCity={currentCity} handleCitySwitch={handleCitySwitch}/>
        {hasNoOffers ?
          <MainScreenEmpty /> :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {currentCity}</b>
                <SortOptions />
                <div className="cities__places-list places__list tabs__content">
                  <CardList offers={cityOffers} cardType={CardType.City} handleCardMouseEnter={handleCardMouseEnter} handleCardMouseLeave={handleCardMouseLeave}/>
                </div>
              </section>
              <div className="cities__right-section">
                <Map offers={cityOffers} mapType={MapType.City} selectedPoint={selectedPoint}/>
              </div>
            </div>
          </div>}
      </main>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
