import React, { Component } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import Konva from "konva";

const SnakeBody = ({ x, y, width, height, blockSize }) => (
  <Rect
    x={x * blockSize}
    y={y * blockSize}
    width={blockSize}
    height={blockSize}
    fill='black'
  />
);

export default SnakeBody;
