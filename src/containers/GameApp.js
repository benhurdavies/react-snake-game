import React, { Component } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import styled from "styled-components";

import Snake from "../components/game/Snake";
import Background from "../components/game/Background";

import { coordinateForMove } from "../util/helper";

const gameParam = {
  blockSize: 20,
  width: window.innerWidth - 50,
  height: window.innerHeight - 50,
  keysWhitelist: {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowRight: "right",
    ArrowLeft: "left"
  },
  invalidMove: {
    up: "down",
    down: "up",
    right: "left",
    left: "right"
  }
};

gameParam.widthInBlocks = gameParam.width / gameParam.blockSize;
gameParam.heightInBlocks = gameParam.height / gameParam.blockSize;

const StyleContainer = styled.div`
  width: ${gameParam.width}px;
  margin-left: auto;
  margin-right: auto;
`;

class GameApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snake: this.initSnake(6)
    };
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  handleKeyPress = event => {
    const key = event.key;
    if (gameParam.keysWhitelist[key]) {
      this.moveSnake(gameParam.keysWhitelist[key]);
    }
  };

  initSnake(snakeSize = 4) {
    const snakeY = Math.floor(gameParam.heightInBlocks / 2);
    const snakeTailX =
      Math.floor(gameParam.widthInBlocks / 2) - Math.floor(snakeSize / 2);
    let snake = Array(snakeSize);
    for (let x = snakeTailX, i = 0; i < snakeSize; x++, i++) {
      snake[i] = defaultSnakeBody(x, snakeY);
      if (i === 0) snakeTail(snake[i]);
      else if (i === snakeSize - 1) snakeHead(snake[i]);
    }
    return snake;
  }

  moveSnake = direction => {
    if (!this.validateMove(direction)) return;

    const { snake } = this.state;
    const newSnake = [...snake];
    const oldHead = newSnake.pop();
    const oldHeadToBody = defaultSnakeBody(oldHead.x, oldHead.y);
    const coordinate = coordinateForMove(oldHead.x, oldHead.y, direction);
    const newHead = snakeHead(
      defaultSnakeBody(coordinate.x, coordinate.y),
      direction
    );
    this.setState({ snake: [...newSnake.slice(1), oldHeadToBody, newHead] });
  };

  validateMove = direction => {
    debugger;
    const snakeHead = this.state.snake[this.state.snake.length - 1];
    if (gameParam.invalidMove[snakeHead.towards] === direction) return false;
    else return true;
  };

  render() {
    return (
      <StyleContainer>
        <Stage width={gameParam.width} height={gameParam.height}>
          <Layer>
            <Background width={gameParam.width} height={gameParam.height} />
            <Snake snake={this.state.snake} />
          </Layer>
        </Stage>
      </StyleContainer>
    );
  }
}

function defaultSnakeBody(x, y) {
  return {
    x,
    y,
    id: `${x}|${y}`,
    name: "snake",
    blockSize: gameParam.blockSize
  };
}

function snakeTail(snakeBody) {
  snakeBody.isTail = true;
  return snakeBody;
}

function snakeHead(snakeBody, towards = "right") {
  snakeBody.isHead = true;
  snakeBody.towards = towards;
  return snakeBody;
}

export default GameApp;
