import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {storeNoAuth} from '../../utils/mocks';
import LoginScreen from './login-screen';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: LoginScreen', () => {

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeNoAuth)}>
        <Router history={history}>
          <LoginScreen />
        </Router>
      </Provider>);

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'keks');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

});
