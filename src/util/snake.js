export function createSnake(board, snakeSize = 4) {
  const xMax = board[0].length;
  const yMax = board.length;
  const snakeY = Math.floor(yMax / 2);
  const snakeTailX = Math.floor(xMax / 2) - Math.floor(snakeSize / 2);
  let snake = Array(snakeSize);
  for (let x = snakeTailX, i = 0; i < snakeSize; x++, i++) {
    snake[i] = defaultSnakeBody(x, snakeY);
    if (i === 0) snakeTail(snake[i]);
    else if (i === snakeSize - 1) snakeHead(snake[i]);
  }
  return snake;
}

export function moveSnake(board, snake, direction) {
  switch (direction) {
    case 'right':
      return moveSnakeRight(board, snake);
    default:
      throw Error('Not implemented direction');
  }
}

function moveSnakeRight(board, snake) {
  const newSnake = [...snake];
  const oldHead = newSnake.pop();
  const oldHeadToBody = defaultSnakeBody(oldHead.x, oldHead.y);
  const newHead = snakeHead(defaultSnakeBody(oldHead.x + 1, oldHead.y));
  return {
    snake: [...newSnake.slice(1), oldHeadToBody, newHead],
    changes: [
      { ...board[newSnake[0].y][newSnake[0].x], aboveIt: null },
      { ...board[oldHeadToBody.y][oldHeadToBody.x], aboveIt: oldHeadToBody },
      { ...board[newHead.y][newHead.x], aboveIt: newHead }
    ]
  };
}

export function createSnakeChanges(board, snake) {
  return snake.map(snakeBody => {
    return { ...board[snakeBody.y][snakeBody.x], aboveIt: snakeBody };
  });
}

function defaultSnakeBody(x, y) {
  return {
    x,
    y,
    id: `${x}|${y}`,
    name: 'snake'
  };
}

function snakeTail(snakeBody) {
  snakeBody.isTail = true;
  return snakeBody;
}

function snakeHead(snakeBody, towards = 'right') {
  snakeBody.isHead = true;
  snakeBody.towards = towards;
  return snakeBody;
}
