export function createSnake(board, snakeSize = 4) {
  const xMax = board[0].length;
  const yMax = board.length;
  const snakeY = Math.floor(yMax / 2);
  const snakeTailX = Math.floor(xMax / 2) - Math.floor(snakeSize / 2);
  let snake = Array(snakeSize);
  for (let x = snakeTailX, i = 0; i < snakeSize; x++, i++) {
    snake[i] = defaultSnakeBody(x, snakeY);
    if (i === 0) snake[i].isTail = true;
    else if (i === snakeSize - 1) {
      snake[i].isHead = true;
      snake[i].towards = 'right';
    }
  }
  return snake;
}

export function createSnakeChanges(board, snake) {
  return snake.map(snakeBody => {
    return { ...board[snakeBody.y][snakeBody.x], aboveIt: snakeBody };
  });
}

export function defaultSnakeBody(x, y) {
  return {
    x,
    y,
    id: `${x}|${y}`
  };
}
