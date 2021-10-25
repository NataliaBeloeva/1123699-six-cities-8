import {Offers} from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers;
  cardType: string;
  handleCardMouseEnter?: (offerId: number) => void;
  handleCardMouseLeave?: () => void;
}

function CardList(props: CardListProps): JSX.Element {
  const {offers, cardType, handleCardMouseEnter, handleCardMouseLeave} = props;

  return (
    <>
      {offers.map((offer) => <Card key={offer.id} offer={offer} cardType={cardType} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave} />)}
    </>
  );
}

export default CardList;
