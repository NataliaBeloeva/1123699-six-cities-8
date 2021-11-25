import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {postReview} from '../../store/api-action';
import {fakeOffersFromAdapter, fakeReviewsFromAdapter, storeAuth} from '../../utils/mocks';
import CommentForm from './comment-form';

const MAX_RATING_VALUE = 5;

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: CommentForm', () => {

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <CommentForm id={fakeReviewsFromAdapter[0].id.toString()} />
        </Router>
      </Provider>);

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i)).toBeInTheDocument();
    expect(screen.queryAllByRole('radio').length).toBe(MAX_RATING_VALUE);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  it('should dispatch postReview when click submit', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <CommentForm id={fakeReviewsFromAdapter[0].id.toString()} />
        </Router>,
      </Provider>,
    );

    userEvent.type(screen.getByPlaceholderText(/Tell how was your stay/i), 'Test');
    expect(screen.getByDisplayValue(/Test/i)).toBeInTheDocument();

    const radioButtons = screen.queryAllByRole('radio');

    userEvent.click(radioButtons[0]);
    expect(mockStore(storeAuth).getActions()).toEqual([]);
    userEvent.click(screen.getByRole('button'));
    setTimeout(() => expect(mockStore(storeAuth).getActions()).toEqual([postReview(fakeReviewsFromAdapter[0], fakeOffersFromAdapter[0].id.toString())]), 0);
  });

});

