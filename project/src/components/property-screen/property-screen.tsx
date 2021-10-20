import {getRating} from '../../utils/offer';
import {Offer, Offers} from '../../types/offer';
import {Reviews} from '../../types/review';
import {CardType, MapType} from '../../const';
import Logo from '../logo/logo';
import CommentList from '../comment-list/comment-list';
import CommentFormScreen from '../comment-form/comment-form';
import Map from '../map/map';
import CardList from '../card-list/card-list';

type PropertyScreenProps = {
  offer: Offer;
  offers: Offers;
  reviews: Reviews;
  selectedPoint?: Offer | undefined;
  handleCardMouseEnter: (listItemId: number) => void;
  handleCardMouseLeave: () => void;
};

function PropertyScreen(props: PropertyScreenProps): JSX.Element {
  const {offer, offers, reviews, handleCardMouseEnter, handleCardMouseLeave, selectedPoint} = props;
  const {bedrooms, description, goods, host, id, images, isFavorite, isPremium, maxAdults, price, rating, title, type} = offer;
  const nearbyOffers = offers.slice(0, 3);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo isActive={false} />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property" id={`${id}`}>
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
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
                <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
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
                {reviews.length > 0 && <CommentList reviews={reviews} />}
                <CommentFormScreen />
              </section>
            </div>
          </div>
          <Map offers={nearbyOffers} mapType={MapType.Property} selectedPoint={selectedPoint}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardList offers={nearbyOffers} cardType={CardType.Nearby} handleCardMouseEnter={handleCardMouseEnter} handleCardMouseLeave={handleCardMouseLeave}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
