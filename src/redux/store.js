import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { googleReducer } from './google/googleReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(googleReducer, composeEnhancers(applyMiddleware(thunk)));
