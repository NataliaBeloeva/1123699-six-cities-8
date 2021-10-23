import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
