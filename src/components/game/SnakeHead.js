import React from 'react';
import { Shape } from 'react-konva';

const SnakeHead = ({ x, y, width, height, blockSize, theme }) => (
  <Shape
    x={x * blockSize}
    y={y * blockSize}
    fill={theme.snakeColor}
    sceneFunc={(ctx, shape) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(10, 0);
      ctx.bezierCurveTo(20, 0, 20, 20, 10, 0);
      //context.lineTo(20, 20);
      ctx.lineTo(0, 10);
      ctx.lineTo(0, 0);
      ctx.stroke();
    }}
  />
);

export default SnakeHead;
