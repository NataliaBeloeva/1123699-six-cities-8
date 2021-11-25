import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Router} from 'react-router-dom';
import {storeAuth} from '../../utils/mocks';
import FavoritesScreen from './favorites-screen';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();

describe('Component: FavoritesScreen', () => {

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <FavoritesScreen />
        </Router>
      </Provider>);

    expect(screen.getByTestId('favorites')).toBeInTheDocument();
  });

});
