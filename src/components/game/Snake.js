import React, { Component } from "react";

import SnakeBody from "./SnakeBody";

const Snake = ({ snake }) => {
  return snake.map((snakeBody,index) => {
    return <SnakeBody key={`${index}_${snakeBody.id}`} {...snakeBody} />;
  });
};

export default Snake;