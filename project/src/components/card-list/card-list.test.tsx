import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {CardType} from '../../const';
import {fakeFavoritesFromAdapter, fakeOffersFromAdapter} from '../../utils/mocks';
import CardList from './card-list';

const history = createMemoryHistory();

describe('Component: CardList', () => {

  it('should render correctly, card type "City"', () => {
    render(
      <Router history={history}>
        <CardList offers={fakeOffersFromAdapter} cardType={CardType.City}/>
      </Router>);

    const cards: HTMLElement[] = screen.getAllByText(/rating/i);
    expect(cards.length).toBe(fakeOffersFromAdapter.length);
  });

  it('should render correctly, card type "Nearby"', () => {
    render(
      <Router history={history}>
        <CardList offers={fakeOffersFromAdapter} cardType={CardType.Nearby}/>
      </Router>);

    const cards: HTMLElement[] = screen.getAllByText(/rating/i);
    expect(cards.length).toBe(fakeOffersFromAdapter.length);
  });

  it('should render correctly, card type "Favorite"', () => {
    render(
      <Router history={history}>
        <CardList offers={fakeFavoritesFromAdapter} cardType={CardType.Favorite}/>
      </Router>);

    const cards: HTMLElement[] = screen.getAllByText(/rating/i);
    expect(cards.length).toBe(fakeOffersFromAdapter.length);
  });

});
