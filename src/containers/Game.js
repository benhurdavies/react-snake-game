import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Board from '../components/Board';
import DefaultTheme from '../theme/default';
import { initializeBoard } from '../store/board/action';

const styleGame = styled.div`
  width: ${({ theme, rowTileLength }) => rowTileLength * theme.tileSize};
`;

class Game extends Component {
  componentDidMount() {
    const boardWidth = this.boardContainer.offsetWidth;
    const boardHeight = window.innerHeight;
    this.props.dispatch(
      initializeBoard(boardWidth, boardHeight, DefaultTheme.tileSize)
    );
  }

  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <div
          ref={ele => {
            this.boardContainer = ele;
          }}
          rowTileLength={this.props.rowTileLength}
        >
          <Board board={this.props.board} />
        </div>
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
