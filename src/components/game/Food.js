import React from 'react';
import { Rect } from 'react-konva';

const Food = ({ x, y, width, height, blockSize }) => (
  <Rect
    x={x * blockSize}
    y={y * blockSize}
    width={blockSize}
    height={blockSize}
    fill="red"
  />
);

export default Food;
