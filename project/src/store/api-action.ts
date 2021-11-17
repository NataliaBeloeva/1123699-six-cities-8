import {toast} from 'react-toastify';
import {ThunkActionResult} from '../types/action';
import {loadOffers, redirectToRoute, userLogout, userLogin, loadOffer, loadOfferComplete, loadOfferError, loadOffersNearby, loadReviews, uploadReview, updateOffers, loadFavorites} from './action';
import {saveToken, dropToken} from '../services/token';
import {ApiRoute, AppRoute, ServiceMessage, HTTP_STATUS_OK, ReviewStatus} from '../const';
import {Offer, OfferFromServer} from '../types/offer';
import {AuthData} from '../types/auth-data';
import {UserFromServer} from '../types/user';
import {PostReview, ReviewFromServer} from '../types/review';
import {adaptOfferToClient, adaptReviewToClient, adaptUserToClient} from '../services/adapter';

const fetchOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferFromServer[]>(ApiRoute.Offers);
    dispatch(loadOffers(data.map((offer) => adaptOfferToClient(offer))));
  };

const fetchOffer = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOffer());
    try {
      const {data} = await api.get<OfferFromServer>(`${ApiRoute.Offers}/${id}`);
      dispatch(loadOfferComplete(adaptOfferToClient(data)));
    } catch {
      dispatch(loadOfferError());
    }
  };

const fetchOffersNearby = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferFromServer[]>(`${ApiRoute.Offers}/${id}/nearby`);
    dispatch(loadOffersNearby(data.map((offer) => adaptOfferToClient(offer))));
  };

const fetchFavorites = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferFromServer[]>(ApiRoute.Favorites);
    dispatch(loadFavorites(data.map((offer) => adaptOfferToClient(offer))));
  };

const changeFavoriteStatus = (id: number, isFavorite: boolean, onUpdate?: (updatedOffer: Offer) => void): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<OfferFromServer>(`${ApiRoute.Favorites}/${id}/${Number(!isFavorite)}`);
    dispatch(updateOffers(adaptOfferToClient(data)));
    onUpdate && onUpdate(adaptOfferToClient(data));
  };

const fetchReviews = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ReviewFromServer[]>(`${ApiRoute.Comments}/${id}`);
    dispatch(loadReviews(data.map((review) => adaptReviewToClient(review))));
  };

const postReview = ({comment, rating}: PostReview, id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(uploadReview(ReviewStatus.Uploading));
    try {
      await api.post<ReviewFromServer[]>(`${ApiRoute.Comments}/${id}`, {comment, rating});
      const {data} = await api.get<ReviewFromServer[]>(`${ApiRoute.Comments}/${id}`);
      dispatch(loadReviews(data.map((review)=> adaptReviewToClient(review))));
      dispatch(uploadReview(ReviewStatus.Uploaded));
    }
    catch {
      dispatch(uploadReview(ReviewStatus.NotUploaded));
      toast.warn(ServiceMessage.PostReviewFail);
    }
  };

const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get(ApiRoute.Login);
      if (response.status === HTTP_STATUS_OK) {
        dispatch(userLogin(adaptUserToClient(response.data)));
      }
    } catch {
      toast.info(ServiceMessage.AuthFail);
    }
  };

const login = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.post<UserFromServer>(ApiRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(userLogin(adaptUserToClient(data)));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch {
      toast.warn(ServiceMessage.LoginFail);
    }
  };

const logout = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(userLogout());
  };

export {fetchOffers, fetchOffer, fetchOffersNearby, fetchFavorites, changeFavoriteStatus, fetchReviews, postReview, checkAuth, login, logout};
