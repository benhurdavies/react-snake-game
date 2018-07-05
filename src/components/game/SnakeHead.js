import React from 'react';
import { Shape } from 'react-konva';

import { radianFromSide, TO_RADIANS } from '../../util/helper';

const SnakeHead = ({ x, y, blockSize, theme, towards }) => (
  <Shape
    x={x * blockSize}
    y={y * blockSize}
    sceneFunc={(ctx, shape) => {
      ctx.beginPath();
      ctx.translate(10, 10);
      ctx.rotate(radianFromSide[towards]);
      ctx.translate(-10, -10);
      ctx.moveTo(0, 0);
      ctx.lineTo(10, 0);
      ctx.bezierCurveTo(20, 0, 20, 20, 10, 20);
      ctx.lineTo(0, 20);
      ctx.lineTo(0, 0);
      ctx.fillStyle = theme.snakeColor;
      ctx.fill();
      // eyes
      ctx.beginPath();
      ctx.translate(8, 6);
      ctx.arc(0, 0, 2, 0, 2 * Math.PI);
      ctx.fillStyle = theme.snakeColorInvert;
      ctx.fill();
      ctx.beginPath();
      ctx.translate(0, 8);
      ctx.arc(0, 0, 2, 0, 2 * Math.PI);
      ctx.fillStyle = theme.snakeColorInvert;
      ctx.fill();
      ctx.translate(-8, -14); //reseting to (0,0)
      //tongue
      ctx.beginPath();
      ctx.translate(17, 10);
      ctx.rotate(((x + y) % 2 ? 350 : 20) * TO_RADIANS);
      ctx.moveTo(6, -3);
      ctx.lineTo(0, 0);
      ctx.lineTo(6, 2);
      ctx.lineWidth = 2;
      ctx.strokeStyle = theme.snakeColor;
      ctx.stroke();
    }}
  />
);

export default SnakeHead;
