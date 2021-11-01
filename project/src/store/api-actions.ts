import {toast} from 'react-toastify';
import {ThunkActionResult} from '../types/action';
import {loadOffers, redirectToRoute, userLogout, userLogin} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, AUTH_FAIL_MESSAGE, LOGIN_FAIL_MESSAGE} from '../const';
import {OfferFromServer} from '../types/offer';
import {AuthData} from '../types/auth-data';
import {UserFromServer} from '../types/user';
import {adaptOfferToClient, adaptUserToClient} from '../services/adapter';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferFromServer[]>(APIRoute.Hotels);
    dispatch(loadOffers(data.map((hotel) => adaptOfferToClient(hotel))));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get(APIRoute.Login);
      if (response.status === 200) {
        dispatch(userLogin(adaptUserToClient(response.data)));
      }
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.post<UserFromServer>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(userLogin(adaptUserToClient(data)));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch {
      toast.warn(LOGIN_FAIL_MESSAGE);
    }
  };


const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(userLogout());
  };

export {fetchOffersAction, checkAuthAction, loginAction, logoutAction};
