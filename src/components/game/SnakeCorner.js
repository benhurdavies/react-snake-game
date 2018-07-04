import React from 'react';
import { Shape } from 'react-konva';

import { radianFromCorner } from '../../util/helper';

const SnakeCorner = ({ x, y, corner, blockSize, theme }) => {
  debugger;
  return (
    <Shape
      x={x * blockSize}
      y={y * blockSize}
      sceneFunc={(ctx, shape) => {
        ctx.beginPath();
        ctx.translate(10, 10);
        ctx.rotate(radianFromCorner[corner]);
        ctx.translate(-10, -10);
        ctx.moveTo(5, 20);
        ctx.lineTo(0, 20);
        ctx.lineTo(0, 0);
        ctx.lineTo(20, 0);
        ctx.lineTo(20, 5);
        ctx.bezierCurveTo(20, 20, 20, 20, 5, 20);
        ctx.fillStyle = theme.snakeColor;
        ctx.fill();
      }}
    />
  );
};

export default SnakeCorner;
