import { CREATE_SNAKE } from '../actionType';
import { paint } from '../board/action';
import {
  createSnake as getSnake,
  createSnakeChanges,
  moveSnake as moveSnakeDetail
} from '../../util/snake';

function createSnakeSuccess(snake) {
  return { type: CREATE_SNAKE, snake };
}

export function createSnake() {
  return (dispatch, getState) => {
    const state = getState();
    const snake = getSnake(state.board);
    return dispatch(createSnakeSuccess(snake));
  };
}

export function paintSnake() {
  return (dispatch, getState) => {
    const state = getState();
    const changes = createSnakeChanges(state.board, state.snake);
    dispatch(paint(changes));
  };
}

export function moveSnake(direction) {
  return (dispatch, getState) => {
    const state = getState();
    const snakeInfo = moveSnakeDetail(state.board, state.snake, direction);
    dispatch(createSnakeSuccess(snakeInfo.snake));
    dispatch(paint(snakeInfo.changes));
  };
}
