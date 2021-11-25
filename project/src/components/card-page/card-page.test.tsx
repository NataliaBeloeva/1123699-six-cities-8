import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {City} from '../../const';
import {fakeOffersFromAdapter, storeAuth} from '../../utils/mocks';
import CardPage from './card-page';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: CardPage', () => {

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <CardPage currentCity={City.Paris} offers={fakeOffersFromAdapter} hasNoOffers={false} />
        </Router>
      </Provider>);

    const cards: HTMLElement[] = screen.getAllByText(/rating/i);
    expect(cards.length).toBe(fakeOffersFromAdapter.length);
  });

  it('should render correctly when no offers', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <CardPage currentCity={City.Paris} offers={[]} hasNoOffers />
        </Router>
      </Provider>);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });

});
