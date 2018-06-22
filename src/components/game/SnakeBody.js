import React from 'react';
import { Rect } from 'react-konva';

const SnakeBody = ({ x, y, width, height, blockSize, theme }) => (
  <Rect
    x={x * blockSize}
    y={y * blockSize}
    width={blockSize}
    height={blockSize}
    fill={theme.snakeColor}
  />
);

export default SnakeBody;
