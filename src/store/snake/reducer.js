import { CREATE_SNAKE } from '../actionType';

const initialState = [];
export default function snake(state = initialState, action) {
  switch (action.type) {
    case CREATE_SNAKE:
      return [...action.snake];
    default:
      return state;
  }
}
