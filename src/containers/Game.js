import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Board from '../components/Board';
import DefaultTheme from '../theme/default';
import { initializeBoard } from '../store/board/action';

const StyleGame = styled.div`
  width: ${({ theme, rowTileLength }) => rowTileLength * theme.tileSize}px;
  margin-left: auto;
  margin-right: auto;
`;

class Game extends Component {
  componentDidMount() {
    const boardWidth = window.innerWidth;
    const boardHeight = window.innerHeight;
    this.props.dispatch(
      initializeBoard(boardWidth, boardHeight, DefaultTheme.tileSize)
    );
  }

  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <StyleGame rowTileLength={this.props.rowTileLength}>
          <Board board={this.props.board} />
        </StyleGame>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    rowTileLength: state.board[0].length
  };
}

export default connect(mapStateToProps)(Game);
