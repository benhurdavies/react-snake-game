import React from 'react';

import SnakeBody from './SnakeBody';

const Snake = ({ snake, theme }) => {
  return snake.map((snakeBody, index) => {
    return (
      <SnakeBody
        key={`${index}_${snakeBody.id}`}
        {...snakeBody}
        theme={theme}
      />
    );
  });
};

export default Snake;
