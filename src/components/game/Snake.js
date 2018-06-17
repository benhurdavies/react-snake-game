import React, { Component } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import Konva from "konva";

import SnakeBody from "./SnakeBody";

const Snake = ({ snake }) => {
  return snake.map((snakeBody,index) => {
    return <SnakeBody key={`${index}_${snakeBody.id}`} {...snakeBody} />;
  });
};

export default Snake;