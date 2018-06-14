import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Board from '../components/Board';
import { initializeGame } from '../store/app/action';

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
      initializeGame(boardWidth, boardHeight, this.props.theme.tileSize)
    );
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
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
    rowTileLength: state.board[0].length,
    theme: state.app.theme
  };
}

export default connect(mapStateToProps)(Game);
