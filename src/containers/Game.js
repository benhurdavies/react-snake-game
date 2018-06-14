import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Board from '../components/Board';
import { initializeGame } from '../store/app/action';
import { moveSnake } from '../store/snake/action';

const StyleGame = styled.div`
  width: ${({ theme, rowTileLength }) => rowTileLength * theme.tileSize}px;
  margin-left: auto;
  margin-right: auto;
`;

const whitelist = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowRight: 'right',
  ArrowLeft: 'left'
};

class Game extends Component {
  componentDidMount() {
    const boardWidth = window.innerWidth;
    const boardHeight = window.innerHeight;
    this.props.dispatch(
      initializeGame(boardWidth, boardHeight, this.props.theme.tileSize)
    );
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  handleKeyPress = event => {
    const key = event.key;
    if (whitelist[key]) {
      this.props.dispatch(moveSnake(whitelist[key]));
    }
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <StyleGame rowTileLength={this.props.rowTileLength}>
          <Board board={this.props.board} />
        </StyleGame>
      </ThemeProvider>
    );
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    rowTileLength: state.board[0].length,
    theme: state.app.theme
  };
}

export default connect(mapStateToProps)(Game);
