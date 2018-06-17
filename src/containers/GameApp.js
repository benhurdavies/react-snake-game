import React, { Component } from "react";
import { connect } from "react-redux";
import { Stage, Layer } from "react-konva";
import styled from "styled-components";

import Background from "../components/game/Background";
import Food from "../components/game/Food";
import Snake from "../components/game/Snake";

import { coordinateForMove, getRandomPosition } from "../util/helper";

const gameParam = {
  blockSize: 20,
  width: window.innerWidth - 50,
  height: window.innerHeight - 50,
  initialFrameLegth: 200,
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

gameParam.widthInBlocks = Math.floor(gameParam.width / gameParam.blockSize);
gameParam.heightInBlocks = Math.floor(gameParam.height / gameParam.blockSize);

const StyleContainer = styled.div`
  width: ${gameParam.width}px;
  margin-left: auto;
  margin-right: auto;
`;

class GameApp extends Component {
  constructor(props) {
    super(props);
    const snake = this.initSnake();
    this.state = {
      snake: snake,
      food: this.newFood(snake)
    };
    document.addEventListener("keydown", this.handleKeyPress, false);
    this.gameLoop();
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

  gameLoop = () => {
    const snakeHead = this.state.snake[this.state.snake.length - 1];
    const nextPosition = coordinateForMove(
      snakeHead.x,
      snakeHead.y,
      snakeHead.towards
    );
    if (this.checkCollision(nextPosition)) {
      this.gameOver();
      return;
    } else {
      this.moveSnake(snakeHead.towards);
      let timeout = setTimeout(this.gameLoop, gameParam.initialFrameLegth);
    }
  };

  moveSnake = direction => {
    if (!this.validateMove(direction)) return;

    const { snake } = this.state;
    const newSnake = [...snake];
    const oldHead = newSnake.pop();
    const nextPosition = coordinateForMove(oldHead.x, oldHead.y, direction);
    const oldHeadToBody = defaultSnakeBody(oldHead.x, oldHead.y);
    const newHead = snakeHead(
      defaultSnakeBody(nextPosition.x, nextPosition.y),
      direction
    );
    if (this.goingToEat(nextPosition)) {
      this.ateFood();
      this.setState({ snake: [...newSnake, oldHeadToBody, newHead] });
    } else {
      this.setState({ snake: [...newSnake.slice(1), oldHeadToBody, newHead] });
    }
  };

  goingToEat = nextPosition => {
    const { food } = this.state;
    return food.id === `f_${nextPosition.x}|${nextPosition.y}`;
  };

  validateMove = direction => {
    const snakeHead = this.state.snake[this.state.snake.length - 1];
    if (gameParam.invalidMove[snakeHead.towards] === direction) return false;
    else return true;
  };

  gameOver = () => {
    this.reset();
  };

  reset = () => {
    this.setState({ snake: this.initSnake() });
  };

  checkCollision = nextPosition => {
    let IsOutOfArea = false;
    let hitBody = false;
    if (
      nextPosition.x > gameParam.widthInBlocks ||
      nextPosition.y > gameParam.heightInBlocks ||
      nextPosition.x < 0 ||
      nextPosition.y < 0
    ) {
      IsOutOfArea = true;
    } else if (
      this.state.snake.find(
        snakeBody => snakeBody.id === `s_${nextPosition.x}|${nextPosition.y}`
      )
    ) {
      hitBody = true;
    }
    return IsOutOfArea || hitBody;
  };

  newFood = snake => {
    var newPosition = getRandomPosition(
      gameParam.widthInBlocks,
      gameParam.heightInBlocks
    );
    if (
      snake.find(
        snakeBody => snakeBody.id === `s_${newPosition.x}|${newPosition.y}`
      )
    ) {
      return this.newFood();
    } else {
      return defaultFood(newPosition.x, newPosition.y);
    }
  };

  ateFood = () => {
    const { snake } = this.state;
    this.setState({ food: this.newFood(snake) });
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <Layer>

        <Snake snake={this.state.snake} theme={this.props.theme} />
        <Food {...this.state.food} theme={this.props.theme} />
      </Layer>
    );
  }
}

function defaultSnakeBody(x, y) {
  return {
    x,
    y,
    id: `s_${x}|${y}`,
    name: "snake",
    blockSize: gameParam.blockSize
  };
}

function defaultFood(x, y) {
  return {
    x,
    y,
    id: `f_${x}|${y}`,
    name: "food",
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

function mapStateToProps(state) {
  return {
    theme: state.app.theme
  };
}

export default connect(mapStateToProps)(GameApp);
