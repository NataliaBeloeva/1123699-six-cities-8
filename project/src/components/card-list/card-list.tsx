import {Offers} from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers;
  cardType: string;
  onMouseEnter?: (offerId: number) => void;
  onMouseLeave?: () => void;
  onFavoriteClick?: (offerId: number, isFavorite: boolean) => void;
}

function CardList(props: CardListProps): JSX.Element {
  const {offers, cardType, onMouseEnter, onMouseLeave, onFavoriteClick} = props;

  return (
    <>
      {offers.map((offer) => <Card key={offer.id} offer={offer} cardType={cardType} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  onFavoriteClick={onFavoriteClick} />)}
    </>
  );
}

export default CardList;
