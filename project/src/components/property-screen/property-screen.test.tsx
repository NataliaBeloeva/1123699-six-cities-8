import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Router} from 'react-router-dom';
import {storeAuth, storeNoAuth} from '../../utils/mocks';
import PropertyScreen from './property-screen';

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();

describe('Component: PropertyScreen', () => {

  it('should render correctly when authStatus "AUTH"', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <PropertyScreen />
        </Router>
      </Provider>);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render correctly when authStatus "NOAUTH"', () => {
    render(
      <Provider store={mockStore(storeNoAuth)}>
        <Router history={history}>
          <PropertyScreen />
        </Router>
      </Provider>);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

});

