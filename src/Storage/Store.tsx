/* eslint-disable no-unused-vars */
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../Reducers/rootReducer';

const loggerMiddleware = createLogger();

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  ));

export default Store;
