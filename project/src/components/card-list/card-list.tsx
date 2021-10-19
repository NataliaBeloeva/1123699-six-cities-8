import {Offer, Offers} from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers;
  cardType: string;
  handleCardMouseEnter: (listItemId: number) => void;
  handleCardMouseLeave: () => void;
}

function CardList(props: CardListProps): JSX.Element {
  const {offers, cardType, handleCardMouseEnter, handleCardMouseLeave} = props;

  const handleHoverEnter = (card: Offer): void => {
    handleCardMouseEnter(card.id);
  };

  const handleHoverLeave = (): void => {
    handleCardMouseLeave();
  };

  return (
    <>
      {offers.map((offer) => <Card key={offer.id} offer={offer} cardType={cardType} handleHoverEnter={() => handleHoverEnter(offer)} handleHoverLeave={handleHoverLeave}/>)}
    </>
  );
}

export default CardList;
