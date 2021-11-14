import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {configureStore} from '@reduxjs/toolkit';
import App from './components/app/app';
import {createAPI} from './services/api';
import {userLogout} from './store/action';
import {checkAuth, fetchOffers} from './store/api-action';
import {redirect} from './store/middlewares/redirect';
import {rootReducer} from './store/root-reducer';

const api = createAPI(
  () => store.dispatch(userLogout()),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
