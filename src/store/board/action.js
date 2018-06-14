import { LOAD_BOARD, UPDATE_BOARD } from '../actionType';
import { getBoard } from '../../util/board';
import { paintOnBoard } from '../../util/paint';

function loadBoardSuccess(board) {
  return { type: LOAD_BOARD, board };
}

export function initializeBoard(screenWidth, screenHeight, tileSize) {
  return dispatch => {
    return dispatch(
      loadBoardSuccess(getBoard(screenWidth, screenHeight, tileSize))
    );
  };
}

function updateBoardSuccess(board) {
  return { type: UPDATE_BOARD, board };
}

export function paint(changes) {
  return (dispatch, getState) => {
    const state = getState();
    const board = paintOnBoard(state.board, changes);
    dispatch(updateBoardSuccess(board));
  };
}
