import {
  UPDATE_GAME_SCORE,
  UPDATE_GAME_HIGH_SCORE,
  RESET_GAME_SCORE
} from '../actionType';

export function updateScore() {
  return dispatch => {
    dispatch({ type: UPDATE_GAME_SCORE });
    return dispatch(updateHighScore());
  };
}

function updateHighScore() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.game.currentScore > state.game.highScore) {
      sessionStorage.setItem('highScore', state.game.currentScore);
      dispatch({
        type: UPDATE_GAME_HIGH_SCORE,
        highScore: state.game.currentScore
      });
    }
  };
}

export function restScore() {
  return { type: RESET_GAME_SCORE };
}
