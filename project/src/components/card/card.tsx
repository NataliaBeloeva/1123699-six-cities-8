import {Link} from 'react-router-dom';
import {getRating} from '../../utils/offer';
import {Offer} from '../../types/offer';

type CardProps = {
  offer: Offer;
  handleHoverEnter?: () => void;
  handleHoverLeave?: () => void;
};

function Card(props: CardProps): JSX.Element {
  const {offer, handleHoverEnter, handleHoverLeave} = props;
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} = offer;

  return (
    <article className="cities__place-card place-card" id={`${id}`} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
