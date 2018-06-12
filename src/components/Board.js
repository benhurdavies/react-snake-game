import React from 'react';
import Tile from './Tile';
import styled from 'styled-components';

const Row = styled.div`
  height: ${props => props.theme.tileSize}px;
  width: ${({ theme, rowCount }) => theme.tileSize * rowCount}px;
`;

const Board = ({ board }) => {
  return board.map(rows => {
    return (
      <Row rowCount={rows.length}>{rows.map(row => <Tile tile={row} />)}</Row>
    );
  });
};

export default Board;
