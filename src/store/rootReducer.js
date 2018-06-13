import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import board from './board/reducer';
import app from './app/reducer';

const root = combineReducers({
  router: routerReducer,
  board,
  app
});

export default root;
