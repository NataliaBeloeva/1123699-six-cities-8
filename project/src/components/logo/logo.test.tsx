import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Route, Router, Switch} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Logo from './logo';

const history = createMemoryHistory();

describe('Component: Logo', () => {

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Logo isMainPage={false}/>
      </Router>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked the link', () => {
    history.push('/fake');
    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>This is main page</h1>
          </Route>
          <Route>
            <Logo isMainPage={false}/>
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });

});
