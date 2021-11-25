import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {City} from '../../const';
import MainScreenEmpty from './main-screen-empty';

const history = createMemoryHistory();

describe('Component: MainScreenEmpty', () => {

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <MainScreenEmpty currentCity={City.Paris} />
      </Router>);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });

});
