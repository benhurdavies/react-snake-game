import React from 'react';
import { Rect } from 'react-konva';

import SnakeHead from './SnakeHead';

const SnakeBody = ({ x, y, blockSize, theme }) => (
  <Rect
    x={x * blockSize}
    y={y * blockSize}
    width={blockSize}
    height={blockSize}
    fill={theme.snakeColor}
  />
);

function factory(props) {
  if (props.isHead) {
    return <SnakeHead {...props} />;
  } else return <SnakeBody {...props} />;
}

export default factory;