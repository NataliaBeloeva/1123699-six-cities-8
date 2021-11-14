import {useDispatch, useSelector} from 'react-redux';
import {City} from '../../const';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import CardPage from '../card-page/card-page';
import {switchCity} from '../../store/action';
import {getIsDataLoaded, getSortedOffers} from '../../store/offers-data/selectors';
import {getCurrentCity} from '../../store/app-process/selectors';

function MainScreen(): JSX.Element {
  const offers = useSelector(getSortedOffers);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const currentCity = useSelector(getCurrentCity);

  const dispatch = useDispatch();

  const handleCitySwitch = (city: City) => {
    dispatch(switchCity(city));
  };

  const hasNoOffers = offers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header isMainPage isLoginPage={false}/>
      <main className="page__main page__main--index">
        <CityList currentCity={currentCity} handleCitySwitch={handleCitySwitch}/>
        {!isDataLoaded ?
          <LoadingScreen /> :
          <CardPage currentCity={currentCity} offers={offers} hasNoOffers={hasNoOffers} />}
      </main>
    </div>
  );
}

export default MainScreen;
