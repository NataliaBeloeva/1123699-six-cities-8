import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Router} from 'react-router-dom';
import {storeAuth, storeNoAuth} from '../../utils/mocks';
import Header from './header';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();

describe('Component: Header', () => {

  it('should render correctly when authStatus "AUTH"', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <Header isMainPage={false} isLoginPage={false} />
        </Router>
      </Provider>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
  });

  it('should render correctly when authStatus "NOAUTH"', () => {
    render(
      <Provider store={mockStore(storeNoAuth)}>
        <Router history={history}>
          <Header isMainPage={false} isLoginPage={false} />
        </Router>
      </Provider>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

});
