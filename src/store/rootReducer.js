import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from './app/reducer';
import board from './board/reducer';
import snake from './snake/reducer';

const root = combineReducers({
  router: routerReducer,
  board,
  app,
  snake
});

export default root;
