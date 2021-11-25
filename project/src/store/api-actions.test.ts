import {createAPI} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../types/state';
import {Action} from '@reduxjs/toolkit';
import {ApiRoute, AppRoute, HttpCode, ReviewStatus} from '../const';
import {checkAuth, fetchFavorites, fetchOffer, fetchOffers, fetchOffersNearby, fetchReviews, login, logout, postReview} from '../store/api-action';
import {loadOffer, loadOfferComplete, loadOffers, loadOffersNearby, loadFavorites, redirectToRoute, resetOffers, userLogin, userLogout, loadReviews, uploadReview} from './action';
import {fakeOffersFromAdapter, fakeOffersFromServer, fakeReviewsFromAdapter, fakeReviewsFromServer, fakeUserFromAdapter, fakeUserFromServer} from '../utils/mocks';
import {AuthData} from '../types/auth-data';

const FAKE_ID = '1';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server returns 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(ApiRoute.Login)
      .reply(HttpCode.StatusOk, fakeUserFromServer);

    await store.dispatch(checkAuth());

    expect(store.getActions()).toEqual([
      userLogin(fakeUserFromAdapter),
    ]);
  });

  it('should dispatch userLogin and redirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = { login: 'lasttrain@gmail.com', password: '123qwe' };

    const store = mockStore();

    Storage.prototype.setItem = jest.fn();

    mockAPI
      .onPost(ApiRoute.Login)
      .reply(HttpCode.StatusOk, fakeUserFromServer);

    await store.dispatch(login(fakeUser));

    expect(store.getActions()).toEqual([
      userLogin(fakeUserFromAdapter),
      redirectToRoute(AppRoute.Root),
    ]);
    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token','secret');
  });

  it('should dispatch userLogout and resetOffers when logout', async () => {
    const store = mockStore();

    Storage.prototype.removeItem = jest.fn();

    mockAPI
      .onDelete(ApiRoute.Logout)
      .reply(HttpCode.NoContent);

    await store.dispatch(logout());

    expect(store.getActions()).toEqual([
      userLogout(),
      resetOffers(),
    ]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch loadOffers when GET /hotels', async () => {
    const store = mockStore();

    mockAPI
      .onGet(ApiRoute.Offers)
      .reply(HttpCode.StatusOk, fakeOffersFromServer);

    await store.dispatch(fetchOffers());

    expect(store.getActions()).toEqual([
      loadOffers(fakeOffersFromAdapter),
    ]);
  });

  it('should dispatch loadOffer and loadOfferComplete when GET /hotels/id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${ApiRoute.Offers}/${FAKE_ID}`)
      .reply(HttpCode.StatusOk, fakeOffersFromServer[0]);

    await store.dispatch(fetchOffer(FAKE_ID));

    expect(store.getActions()).toEqual([
      loadOffer(),
      loadOfferComplete(fakeOffersFromAdapter[0]),
    ]);
  });

  it('should dispatch loadOffersNearby when GET /hotels/id/nearby', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${ApiRoute.Offers}/${FAKE_ID}/nearby`)
      .reply(HttpCode.StatusOk, fakeOffersFromServer);

    await store.dispatch(fetchOffersNearby(FAKE_ID));

    expect(store.getActions()).toEqual([
      loadOffersNearby(fakeOffersFromAdapter),
    ]);
  });

  it('should dispatch loadFavorites when GET /favorite', async () => {
    const store = mockStore();

    mockAPI
      .onGet(ApiRoute.Favorites)
      .reply(HttpCode.StatusOk, fakeOffersFromServer);

    await store.dispatch(fetchFavorites());

    expect(store.getActions()).toEqual([
      loadFavorites(fakeOffersFromAdapter),
    ]);
  });

  it('should dispatch loadReviews when GET /comments', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${ApiRoute.Comments}/${FAKE_ID}`)
      .reply(HttpCode.StatusOk, fakeReviewsFromServer);

    await store.dispatch(fetchReviews(FAKE_ID));

    expect(store.getActions()).toEqual([
      loadReviews(fakeReviewsFromAdapter),
    ]);
  });

  it('should dispatch loadReviews and uploadReview when POST /comments/id', async() => {
    const store = mockStore();

    mockAPI
      .onPost(`${ApiRoute.Comments}/${FAKE_ID}`)
      .reply(HttpCode.StatusOk, fakeReviewsFromServer);

    await store.dispatch(postReview({comment: 'Fake comment', rating: 5}, FAKE_ID));

    expect(store.getActions()).toEqual([
      uploadReview(ReviewStatus.Uploading),
      loadReviews(fakeReviewsFromAdapter),
      uploadReview(ReviewStatus.Uploaded),
    ]);
  });

});
