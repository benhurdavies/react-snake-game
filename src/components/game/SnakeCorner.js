import React from 'react';
import { Rect } from 'react-konva';

const SnakeCorner = ({ x, y, blockSize, theme }) => (
  <Rect
    x={x * blockSize}
    y={y * blockSize}
    width={blockSize}
    height={blockSize}
    fill="green"
  />
);

export default SnakeCorner;
