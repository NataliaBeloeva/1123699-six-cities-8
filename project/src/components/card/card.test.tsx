import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {CardType} from '../../const';
import {fakeOffersFromAdapter} from '../../utils/mocks';
import Card from './card';

const history = createMemoryHistory();

describe('Component: Card', () => {

  it('should render correctly, card type "City"', () => {
    render(
      <Router history={history}>
        <Card offer={fakeOffersFromAdapter[0]} cardType={CardType.City}/>
      </Router>);

    expect(screen.getByAltText(/Place/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });

  it('should render correctly, card type "Nearby"', () => {
    render(
      <Router history={history}>
        <Card offer={fakeOffersFromAdapter[0]} cardType={CardType.Nearby}/>
      </Router>);

    expect(screen.getByAltText(/Place/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });

  it('should render correctly, card type "Favorite"', () => {
    render(
      <Router history={history}>
        <Card offer={fakeOffersFromAdapter[0]} cardType={CardType.Favorite}/>
      </Router>);

    expect(screen.getByAltText(/Place/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });

});
