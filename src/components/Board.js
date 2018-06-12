import React from 'react';
import Tile from './Tile';
import styled from 'styled-components';

const Row = styled.div`
  height: ${props => props.theme.tileSize}px;
  width: ${({ theme, rowCount }) => theme.tileSize * rowCount}px;
`;

const Board = ({ board }) => {
  return board.map((rows, rowIndex) => {
    return (
      <Row key={`r_${rowIndex}`} rowCount={rows.length}>
        {rows.map((row, cellIndex) => (
          <Tile key={`c_${cellIndex}`} tile={row} />
        ))}
      </Row>
    );
  });
};

export default Board;
