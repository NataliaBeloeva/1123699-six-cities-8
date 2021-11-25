import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import FavoritesScreenEmpty from './favorites-screen-empty';

const history = createMemoryHistory();

describe('Component: FavoritesScreenEmpty', () => {

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <FavoritesScreenEmpty />
      </Router>);

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });

});
