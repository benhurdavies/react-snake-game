import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import board from './board/reducer';

const root = combineReducers({
  router: routerReducer,
  board
});

export default root;