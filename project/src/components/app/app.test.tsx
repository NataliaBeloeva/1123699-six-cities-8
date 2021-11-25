import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {AppRoute} from '../../const';
import {fakeOffersFromServer, storeAuth, storeNoAuth} from '../../utils/mocks';
import {createAPI} from '../../services/api';
import App from './app';

const onUnauthorized = jest.fn();
const api = createAPI(
  () => onUnauthorized(),
);
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={mockStore(storeAuth)}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

describe('Application Routing', () => {
  it('should render Main Screen when user navigate to "/"', () => {
    history.push(AppRoute.Root);
    render(fakeApp);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Cities/i);
  });

  it('should render Login Screen when user navigate to "/login"', () => {
    history.push(AppRoute.SignIn);
    render(
      <Provider store={mockStore(storeNoAuth)}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Sign in/i);
  });

  it('should render Favorites Screen when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);
    render(fakeApp);

    expect(screen.getByTestId('favorites')).toBeInTheDocument();
  });

  it('should render Property Screen when user navigate to "/offer/id"', () => {
    history.push(`${AppRoute.Room}/${fakeOffersFromServer[0].id}`);
    render(fakeApp);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(`${fakeOffersFromServer[0].title}`);
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render Not Found Screen when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('Back to main page')).toBeInTheDocument();
  });
});


