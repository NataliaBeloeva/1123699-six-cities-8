import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {City, SortType} from '../../const';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import CardPage from '../card-page/card-page';
import {switchCity} from '../../store/action';
import {getIsDataLoaded, getOffers} from '../../store/offers-data/selectors';
import {getCurrentCity, getCurrentSortOption} from '../../store/app-process/selectors';

const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
  isDataLoaded: getIsDataLoaded(state),
  currentCity: getCurrentCity(state),
  currentSortOption: getCurrentSortOption(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleCitySwitch: (city: City) => {
    dispatch(switchCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const {offers, isDataLoaded, currentCity, currentSortOption, handleCitySwitch} = props;
  const cityOffers = offers.filter((offer) => currentCity === offer.city.name);
  const hasNoOffers = cityOffers.length === 0;

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
        {!isDataLoaded ?
          <LoadingScreen /> :
          <CardPage currentCity={currentCity} offers={cityOffers} hasNoOffers={hasNoOffers} />}
      </main>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
