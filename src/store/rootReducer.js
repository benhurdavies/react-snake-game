import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from './app/reducer';
import game from './game/reducer';

const root = combineReducers({
  router: routerReducer,
  app,
  game
});

export default root;
