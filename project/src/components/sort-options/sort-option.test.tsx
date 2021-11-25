import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {storeAuth} from '../../utils/mocks';
import SortOptions from './sort-options';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: SortOptions', () => {

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <SortOptions />
        </Router>
      </Provider>);

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });

});

