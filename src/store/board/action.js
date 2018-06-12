import { LOAD_BOARD } from '../actionType';
import { getBoard } from '../../util/board';

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
