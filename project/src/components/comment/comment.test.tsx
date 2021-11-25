import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {fakeReviewsFromAdapter} from '../../utils/mocks';
import Comment from '../comment/comment';

const history = createMemoryHistory();

describe('Component: Comment', () => {

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Comment review={fakeReviewsFromAdapter[0]} />
      </Router>);

    expect(screen.getByText(fakeReviewsFromAdapter[0].comment)).toBeInTheDocument();
  });

});

