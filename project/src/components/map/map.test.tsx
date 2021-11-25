import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {MapType} from '../../const';
import {fakeOffersFromAdapter} from '../../utils/mocks';
import Map from './map';

const history = createMemoryHistory();

describe('Component: Map', () => {

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Map offers={fakeOffersFromAdapter} mapType={MapType.City}  />
      </Router>);

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });

});

