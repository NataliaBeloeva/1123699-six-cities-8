import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {storeAuth} from '../../utils/mocks';
import {Router} from 'react-router-dom';
import NotFoundScreen from './not-found-screen';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: NotFoundScreen', () => {

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <NotFoundScreen />
        </Router>
      </Provider>);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('Back to main page')).toBeInTheDocument();
  });

});

