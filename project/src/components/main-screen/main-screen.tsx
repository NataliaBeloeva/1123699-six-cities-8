import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Offer} from '../../types/offer';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {CardType, MapType} from '../../const';
import CardList from '../card-list/card-list';
import CityList from '../city-list/city-list';
import Map from '../map/map';
import MainScreenEmpty from './main-screen-empty';
import Header from '../header/header';
import {switchCity} from '../../store/action';

type MainScreenProps = {
  selectedPoint?: Offer | undefined;
  handleCardMouseEnter: (listItemId: number) => void;
  handleCardMouseLeave: () => void;
}

const mapStateToProps = ({currentCity, offers}: State) => ({
  currentCity,
  offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleCitySwitch: (city: string) => {
    dispatch(switchCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  const {selectedPoint, currentCity, offers, handleCardMouseEnter, handleCardMouseLeave, handleCitySwitch} = props;
  const cityOffers = offers.filter((offer) => currentCity === offer.city.name);
  const hasNoOffers = cityOffers.length === 0;

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
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
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
