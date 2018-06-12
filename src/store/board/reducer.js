import { LOAD_BOARD } from '../actionType';

const initialState = [[]];
export default function board(state = initialState, action) {
  return (
    {
      [LOAD_BOARD]: action.board
    }[action.type] || state
  );
}
