import {useEffect, useMemo} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getRating} from '../../utils/offer';
import {changeFavoriteStatus, fetchOffer, fetchOffersNearby, fetchReviews} from '../../store/api-action';
import {AppRoute, AuthStatus, CardType, MapType, MAX_OFFER_IMAGES_COUNT} from '../../const';
import CommentList from '../comment-list/comment-list';
import CommentFormScreen from '../comment-form/comment-form';
import Map from '../map/map';
import CardList from '../card-list/card-list';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {getIsOfferError, getIsOfferLoading, getIsOffersNearbyLoaded, getOffer, getOffersNearby} from '../../store/offers-data/selectors';
import {getAuthStatus} from '../../store/user-process/selectors';
import {getIsReviewsLoaded, getReviews} from '../../store/reviews-process/selectors';
import {updateOffer, updateOffersNearby} from '../../store/action';

function PropertyScreen(): JSX.Element {
  const offer = useSelector(getOffer);
  const offersNearby = useSelector(getOffersNearby);
  const isOfferLoading = useSelector(getIsOfferLoading);
  const isOfferError = useSelector(getIsOfferError);
  const isOffersNearbyLoaded = useSelector(getIsOffersNearbyLoaded);
  const authStatus = useSelector(getAuthStatus);
  const reviews = useSelector(getReviews);
  const isReviewsLoaded = useSelector(getIsReviewsLoaded);

  const {id} = useParams<{id: string}>();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (authStatus !== AuthStatus.Auth) {
      history.push(AppRoute.SignIn);
      return;
    }
    if (offer) {
      dispatch(changeFavoriteStatus(
        offer.id,
        offer.isFavorite,
        (updatedOffer) => {
          dispatch(updateOffer(updatedOffer));
        },
      ));
    }
  };

  const handleNearbyOfferFavoriteClick = (offerId: number, isFavorite: boolean) => {
    if (authStatus !== AuthStatus.Auth) {
      history.push(AppRoute.SignIn);
      return;
    }
    dispatch(changeFavoriteStatus(
      offerId,
      isFavorite,
      (updatedOffer) => {
        dispatch(updateOffersNearby(updatedOffer));
      },
    ));
  };

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchOffersNearby(id));
    dispatch(fetchReviews(id));
  },[dispatch, id]);

  const offers = useMemo(() => {
    if (!offer) {
      return [];
    }
    return [...offersNearby, offer];
  }, [offer, offersNearby]);

  const renderOffer = () => {

    if (isOfferLoading) {
      return <LoadingScreen />;
    }

    if (offer) {
      const {bedrooms, description, goods, host, images, isFavorite, isPremium, maxAdults, price, rating, title, type} = offer;
      return (
        <>
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(0, MAX_OFFER_IMAGES_COUNT).map((image) => (
                  <div key={Math.random()} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && <div className="property__mark"><span>Premium</span></div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button" onClick={handleFavoriteClick}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${getRating(rating)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">{type}</li>
                  <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                  <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (<li key={Math.random()} className="property__inside-item">{good}</li>))}
                  </ul>
                </div>
                <div className="property__host"  >
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''}`}>
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">{host.name}</span>
                    {host.isPro && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">{description}</p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  {!isReviewsLoaded ? <LoadingScreen /> : <CommentList reviews={reviews} />}
                  {authStatus === AuthStatus.Auth && (<CommentFormScreen  id={id} />)}
                </section>
              </div>
            </div>
            {!isOffersNearbyLoaded ? <LoadingScreen /> : <Map offers={offers} mapType={MapType.Property} selectedPoint={offer}/>}
          </section>
          {!isOffersNearbyLoaded ?
            <LoadingScreen /> :
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <CardList offers={offersNearby} cardType={CardType.Nearby} onFavoriteClick={handleNearbyOfferFavoriteClick}/>
                </div>
              </section>
            </div>}
        </>
      );
    }
  };

  return (
    <div>
      {isOfferError ?
        <NotFoundScreen /> :
        <div className="page">
          <Header isMainPage={false} isLoginPage={false} />
          <main className="page__main page__main--property">
            {renderOffer()}
          </main>
        </div>}
    </div>
  );
}

export default PropertyScreen;
