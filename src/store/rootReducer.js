import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const root = combineReducers({
  router: routerReducer,
});

export default root;