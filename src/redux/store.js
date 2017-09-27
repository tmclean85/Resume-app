import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import combineReducers from './combine-reducers';

export default createStore(
  combineReducers,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk,
    )));
