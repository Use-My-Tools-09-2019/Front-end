import React from 'react';
import ReactDOM from 'react-dom';

//redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer  from './store/reducers'

//router
import {BrowserRouter as Router} from 'react-router-dom'

//components
import App from './App'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
  rootElement
);
