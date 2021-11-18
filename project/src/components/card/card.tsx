import {Link} from 'react-router-dom';
import {AppRoute, CardType} from '../../const';
import {CardImageSize} from './const';
import {getRating} from '../../utils/offer';
import {Offer} from '../../types/offer';

type CardProps = {
  offer: Offer;
  cardType: string;
  onMouseEnter?: (offerId: number) => void;
  onMouseLeave?: () => void;
  onFavoriteClick?: (offerId: number, isFavorite: boolean) => void;
};

function Card(props: CardProps): JSX.Element {
  const {offer, cardType, onMouseEnter, onMouseLeave, onFavoriteClick} = props;
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} = offer;

  const isCitiesCard = cardType === CardType.City;
  const isNearbyCard = cardType === CardType.Nearby;
  const isFavoriteCard = cardType === CardType.Favorite;

  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter(offer.id);
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave();
  };

  const handleFavoriteClick = () => {
    onFavoriteClick && onFavoriteClick(id, isFavorite);
  };

  return (
    <article
      className={`place-card ${isCitiesCard ? 'cities__place-card' : ''} ${isNearbyCard ? 'near-places__card' : ''} ${isFavoriteCard ? 'favorites__card' : ''}`}
      id={`${id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`place-card__image-wrapper ${isCitiesCard ? 'cities__image-wrapper' : ''} ${isFavoriteCard ? 'favorites__image-wrapper' : ''}`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width={!isFavoriteCard ? CardImageSize.default.width : CardImageSize.favorite.width}
            height={!isFavoriteCard ? CardImageSize.default.height : CardImageSize.favorite.height}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} onClick={handleFavoriteClick} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
