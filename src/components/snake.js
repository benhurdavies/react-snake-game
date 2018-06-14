import React from 'react';
import styled from 'styled-components';

import { BlankTile } from './Tile';

const SnakeBody = styled.div`
  background-color: ${({ theme }) => theme.snakeColor};
  width: 100%;
  height: ${({ theme }) => theme.tileSize}px;
`;

const snake = props => (
  <BlankTile {...props}>
    <SnakeBody />
  </BlankTile>
);

export default snake;
