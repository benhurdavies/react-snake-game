import {
  UPDATE_GAME_SCORE,
  UPDATE_GAME_HIGH_SCORE,
  RESET_GAME_SCORE
} from '../actionType';

const seesionHighScore = sessionStorage.getItem('highScore');

const initialState = {
  currentScore: 0,
  highScore: seesionHighScore ? parseInt(seesionHighScore, 10) : 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GAME_SCORE:
      return { ...state, currentScore: state.currentScore + 1 };
    case UPDATE_GAME_HIGH_SCORE:
      return { ...state, highScore: action.highScore };
    case RESET_GAME_SCORE:
      return { ...state, currentScore: 0 };
    default:
      return state;
  }
}
