import { LOAD_BOARD, UPDATE_BOARD } from '../actionType';

const initialState = [[]];
export default function board(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOARD:
      return action.board;
    case UPDATE_BOARD:
      return [...action.board];
    default:
      return state;
  }
}
