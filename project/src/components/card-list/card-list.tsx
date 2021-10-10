/* eslint-disable no-console */
import {useState} from 'react';
import {Offer, Offers} from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers;
}

function CardList({offers}: CardListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState({});

  const handleHoverEnter = (card: Offer): void => {
    setActiveCard(card);
  };

  const handleHoverLeave = (): void => {
    setActiveCard({});
  };

  return (
    <>
      {offers.map((offer) => <Card key={offer.id} offer={offer} handleHoverEnter={() => handleHoverEnter(offer)} handleHoverLeave={() => handleHoverLeave()}/>)}
    </>
  );
}

export default CardList;
