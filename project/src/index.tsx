import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ThunkAppDispatch} from './types/action';
import {reviews} from './mocks/reviews';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import {userLogout} from './store/action';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(userLogout()),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
