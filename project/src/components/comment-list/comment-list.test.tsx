import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {fakeReviewsFromAdapter} from '../../utils/mocks';
import CommentList from './comment-list';

const MAX_REVIEWS_AMOUNT = 10;
const history = createMemoryHistory();

describe('Component: CommentList', () => {

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <CommentList reviews={fakeReviewsFromAdapter} />
      </Router>);

    const listItems = screen.queryAllByRole('listitem');
    const comments = fakeReviewsFromAdapter.slice(0, MAX_REVIEWS_AMOUNT);

    expect(screen.getByTestId('reviews')).toBeInTheDocument();
    expect(listItems.length).toBe(comments.length);
  });

});

