import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AuthorizationStatus} from './const';
import {ThunkAppDispatch} from './types/action';
import {reviews} from './mocks/reviews';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {checkAuthAction, fetchQuestionAction} from './store/api-actions';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchQuestionAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
