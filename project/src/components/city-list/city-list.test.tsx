import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {City} from '../../const';
import CityList from '../city-list/city-list';

const history = createMemoryHistory();
const handleCitySwitch = jest.fn();

describe('Component: CityList', () => {

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <CityList currentCity={City.Paris} handleCitySwitch={handleCitySwitch} />
      </Router>);

    expect(screen.queryAllByRole('link').length).toBe(Object.values(City).length);
  });

});
