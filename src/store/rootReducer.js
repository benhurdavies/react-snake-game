import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from './app/reducer';
const root = combineReducers({
  router: routerReducer,
  app
});

export default root;
